+++
title = "Skills"
render = false

[[extra.items]]
category = "Languages"
items = ["C", "Python", "Rust", "Swift"]

[[extra.items]]
category = "Frameworks & Libraries"
items = ["SwiftUI", "Flutter", "Unity", "SpriteKit", "raylib"]

[[extra.items]]
category = "Backend & Data"
items = ["Flask", "MongoDB", "SQLite"]

[[extra.items]]
category = "Tools & Platforms"
items = ["Linux", "Docker", "Git", "Android", "iOS", "macOS"]

[[extra.items]]
category = "Editors"
items = ["Neovim", "VS Code", "MatLab"]

# Per-skill popover for skills without a proof project: an exam where it was
# learned, or a link. Skills that match a project tag show those projects instead.
[extra.notes]
Flask = { label = "Learned in the Advanced Computer Programming exam" }
MongoDB = { label = "Learned in the Advanced Computer Programming exam" }
SQLite = { label = "Learned in the Basi di Dati exam" }
MatLab = { label = "Learned in the Teoria dei Sistemi exam" }
Git = { label = "My GitHub Profile", url = "https://github.com/ad-oliviero" }
Neovim = { label = "Configured in my dotfiles", project = "dotfiles" }
Python = { label = "Used in private projects" }

# Extra projects to surface under a skill even if their tags don't match it
# (e.g. the C++ telecomand belongs under C). Values are project slugs.
[extra.also]
C = ["telecomand-ino"]
+++
