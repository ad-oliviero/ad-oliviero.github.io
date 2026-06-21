+++
title = "uwufetch"
date = 2021-01-18
weight = 1

[extra]
tags = ["C", "Linux", "CLI"]
github_url = "https://github.com/ad-oliviero/uwufetch"
accent = "#f472b6"
+++
A meme system info tool for (almost) all your Linux/Unix-based systems, based on the nyan/UwU trend on r/linuxmasterrace.
<!-- more -->
uwufetch is a meme system-information utility for Linux and other Unix-like systems that
prints OS details. CPU, RAM, GPU and more "uwu"-themed layout. Written in pure
C with minimal dependencies, it's the project that taught me the most, and ended up packaged in
the official Arch repositories, the AUR and Pacstall.

- Themed ASCII art (and optional images) for a wide range of distros, plus FreeBSD, OpenBSD, macOS, iOS and Windows
- Optional image rendering via `viu` instead of ASCII art
- Ships `libfetch`, a reusable library so other apps can pull system info programmatically
- Builds with a plain `make` and a C compiler; available in the Arch repos, AUR and Pacstall
- GPL-3.0 licensed
