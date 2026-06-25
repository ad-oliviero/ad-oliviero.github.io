#!/usr/bin/env python3
"""Bake hero text (name + role) as per-word SVG strokable glyph outlines from the
self-hosted font, so the browser draws them with CSS stroke-dasharray + flex-wrap.

Each word is an independent SVG; a flex container wraps them at viewport edges.
--wbase (cumulative glyph count across previous words) sequences the draw across
word boundaries so the animation reads continuously on any line configuration.

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

TRACKING = 0.98  # ~tracking-tight (intra-glyph, baked into advance)


def _bake_word(
    word: str, word_index: int, glyph_offset: int,
    gs, cmap, hmtx, upem: int, ascent: int, view_h: int, svg_class: str
) -> tuple[str, int]:
    """Return (svg_html, glyph_count) for one word, starting x=0 per word."""
    x = 0.0
    path_parts = []
    glyph_count = 0
    for i, ch in enumerate(word):
        gname = cmap[ord(ch)]
        pen = SVGPathPen(gs)
        gs[gname].draw(pen)
        d = pen.getCommands()
        if d:
            path_parts.append(
                f'<path class="hero-stroke" pathLength="1"'
                f' style="--i:{i}"'
                f' transform="translate({x:.0f},0)" d="{d}"/>'
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
    return (
        f'<span class="hero-word" style="--wbase:{glyph_offset}">{svg}</span>',
        glyph_count
    )


def bake_words(text: str, svg_class: str, out_path: Path, *, view_h: int | None = None) -> None:
    """Bake each word as an independent SVG; space characters become flex gap."""
    f = TTFont(FONT)
    gs = f.getGlyphSet()
    cmap = f.getBestCmap()
    hmtx = f["hmtx"]
    upem = f["head"].unitsPerEm
    ascent = f["hhea"].ascent
    if view_h is None:
        view_h = upem

    words = text.split(" ")
    parts = []
    cumulative = 0
    total_glyphs = 0
    for wi, word in enumerate(words):
        html, gc = _bake_word(word, wi, cumulative, gs, cmap, hmtx, upem, ascent, view_h, svg_class)
        parts.append(html)
        cumulative += gc
        total_glyphs += gc

    out_path.write_text("\n".join(parts))
    print(f"wrote {out_path} ({len(parts)} words, {total_glyphs} glyphs, viewH={view_h})")


# "Adriano Oliviero." — no descenders, em box fits.
bake_words(NAME, "hero-name", ROOT / "templates/partials/hero-name.html")
# "Computer Engineering Student" — 'g','p' descenders need full ascent–descent.
f = TTFont(FONT)
full_h = f["hhea"].ascent - f["hhea"].descent  # 848 - (-260) = 1108
bake_words(ROLE, "hero-name hero-role", ROOT / "templates/partials/hero-role.html", view_h=full_h)
