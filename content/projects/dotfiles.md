+++
title = "Dotfiles"
date = 2026-04-26
weight = 16

[extra]
tags = ["Shell", "Zsh", "Dotfiles", "Hyprland", "stow"]
github_url = "https://github.com/ad-oliviero/DotFiles"
accent = "#a3e635"
+++
My whole cross-platform development and desktop environment, managed with GNU stow.
<!-- more -->
A full configuration set spanning Linux and macOS, split into GNU stow packages so each machine
(laptop, desktop, Mac) pulls in only the pieces it needs, with a custom `restow` helper to wire
it all up in one command.

- **Shell & terminal:** zsh (aliases, keybinds, abbreviations) with a Starship prompt, Alacritty, ranger and SSH/Git config
- **Editor:** a Lua-configured Neovim setup with a pinned plugin lockfile
- **Linux desktop:** a complete Hyprland Wayland rice. hyprlock, hyprpaper, mako, rofi, wlogout, quickshell and GTK theming
- **macOS:** AeroSpace tiling window management
- Per-machine stow packages for Linux and macOS, installed and restowed with one command
