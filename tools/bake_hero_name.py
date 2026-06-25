#!/usr/bin/env python3
"""Bake hero text (name + role) as SVG strokable glyph outlines from the
self-hosted font, so the browser draws them with CSS stroke-dasharray — no JS.

Run:  python3 tools/bake_hero_name.py
Writes: templates/partials/hero-name.html
        templates/partials/hero-role.html

Regenerate if the name, role, or font changes.
"""
import tomllib
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "static/fonts/quattrocento-700.woff2"

config = tomllib.loads((ROOT / "config.toml").read_text())
NAME = config["extra"]["author"] + "."
ROLE = config["extra"]["role"]

TRACKING = 0.98  # ~tracking-tight


def bake(text: str, svg_class: str, out_path: Path, *, view_h: int | None = None) -> None:
    f = TTFont(FONT)
    gs = f.getGlyphSet()
    cmap = f.getBestCmap()
    hmtx = f["hmtx"]
    upem = f["head"].unitsPerEm
    ascent = f["hhea"].ascent
    if view_h is None:
        view_h = upem  # em box works when text has no descenders

    x = 0.0
    path_parts = []
    glyph_count = 0
    for i, ch in enumerate(text):
        if ch == " ":
            x += hmtx[cmap[ord(" ")]][0] * TRACKING
            continue
        gname = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        gs[gname].draw(pen)
        d = pen.getCommands()
        if d:
            path_parts.append(
                f'<path class="hero-stroke" pathLength="1" style="--i:{i}" '
                f'transform="translate({x:.0f},0)" d="{d}"/>'
            )
            glyph_count += 1
        x += hmtx[gname][0] * TRACKING

    svg = (
        f'<svg class="{svg_class}" viewBox="0 0 {x:.0f} {view_h:.0f}" '
        f'aria-hidden="true" xmlns="http://www.w3.org/2000/svg" '
        f'preserveAspectRatio="xMinYMid meet">'
        f'<g transform="scale(1,-1) translate(0,-{ascent:.0f})">'
        + "".join(path_parts) +
        f'</g></svg>'
    )
    out_path.write_text(svg)
    print(f"wrote {out_path} ({len(svg)} bytes, {glyph_count} glyphs, width {x:.0f}u, viewH={view_h})")


# "Adriano Oliviero." — all-caps + lowercase without descenders. Em box fits.
bake(NAME, "hero-name", ROOT / "templates/partials/hero-name.html")
# "Computer Engineering Student" — has 'g' and 'p' descenders → full ascent–descent.
f = TTFont(FONT)
full_h = f["hhea"].ascent - f["hhea"].descent  # 848 - (-260) = 1108
bake(ROLE, "hero-name hero-role", ROOT / "templates/partials/hero-role.html", view_h=full_h)
