+++
title = "num-string"
date = 2023-05-07
weight = 9

[extra]
tags = ["Rust", "Tauri", "Android", "Desktop"]
github_url = "https://github.com/ad-oliviero/num-string"
accent = "#34d399"
logo = "img/num-string.png"
+++
Spells any number out in words. 6347613 becomes "six million three hundred forty-seven...".
<!-- more -->
num-string turns a number into its written form, in both English and Italian. The core
conversion logic is written in Rust and ships as a desktop app via a Tauri GUI. Translations
are template-driven so new languages can be contributed easily.
The Rust core is used inside Unit Converter, bound to its Flutter code over FFI.

- Rust core converting numbers to words, English and Italian
- Cross-platform desktop GUI built with Tauri
- Rust core embedded into the Unit Converter Flutter app via FFI
- Standalone Android port deprecated in favour of that integration
- GPL-3 licensed
