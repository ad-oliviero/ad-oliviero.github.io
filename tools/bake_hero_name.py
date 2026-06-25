#!/usr/bin/env python3
"""Bake `Adriano Oliviero.` (Quattrocento 700) into an SVG of strokable glyph
outlines for the hero draw-in animation.

Run:  python3 tools/bake_hero_name.py
Writes: templates/partials/hero-name.html

Regenerate if the name or the font changes. The woff2 stays self-hosted for body
text; this just bakes the geometry once so the browser needs no JS to draw the
font's own outlines.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = Path(__file__).resolve().parent.parent
FONT = ROOT / "static/fonts/quattrocento-700.woff2"
OUT = ROOT / "templates/partials/hero-name.html"
NAME = "Adriano Oliviero."  # keep in sync with config.extra.author + trailing period

f = TTFont(FONT)
gs = f.getGlyphSet()
cmap = f.getBestCmap()
hmtx = f["hmtx"]
upem = f["head"].unitsPerEm
ascent = f["hhea"].ascent
descent = f["hhea"].descent
TRACKING = 0.98  # ~tracking-tight

x = 0.0
paths = []
for i, ch in enumerate(NAME):
    if ch == " ":
        x += hmtx[cmap[ord(" ")]][0] * TRACKING
        continue
    gname = cmap[ord(ch)]
    pen = SVGPathPen(gs)
    gs[gname].draw(pen)
    d = pen.getCommands()
    if d:
        # font y is up; svg y is down -> flip about the baseline group, then
        # translate by current pen x.
        paths.append((i, x, d))
    x += hmtx[gname][0] * TRACKING

total_w = x
# viewBox height = upem (the em box) so CSS height:1em maps the SVG to the same
# size as text at the same font-size. Flip group turns font y-up into svg y-down
# and seats the em box exactly in the viewBox (top = ascender, baseline at
# ascent/upem from top). "Adriano Oliviero." has no descenders, so nothing clips.
EM = upem

svg_paths = []
for i, px, d in paths:
    svg_paths.append(
        f'<path class="hero-stroke" pathLength="1" style="--i:{i}" '
        f'transform="translate({px:.0f},0)" d="{d}"/>'
    )

svg = (
    f'<svg class="hero-name" viewBox="0 0 {total_w:.0f} {EM:.0f}" '
    f'aria-hidden="true" xmlns="http://www.w3.org/2000/svg" '
    f'preserveAspectRatio="xMinYMid meet">'
    f'<g transform="scale(1,-1) translate(0,-{ascent:.0f})">'
    + "".join(svg_paths) +
    f'</g></svg>'
)

OUT.write_text(svg)
print(f"wrote {OUT} ({len(svg)} bytes, {len(paths)} glyphs, width {total_w:.0f}u)")
