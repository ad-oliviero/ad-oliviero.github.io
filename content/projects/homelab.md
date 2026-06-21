+++
title = "Homelab"
date = 2026-04-27
weight = 17

[extra]
tags = ["Docker", "KVM", "Self-hosting", "Linux"]
github_url = "https://github.com/ad-oliviero/homelab"
accent = "#22c55e"
+++
My self-hosting setup: Docker stacks and KVM virtualization configs for a home server.
<!-- more -->
The configuration behind my home server, Docker Compose stacks for the services I self-host
alongside KVM virtual-machine configs and supporting documentation, kept under version control.
Everything sits behind a Traefik reverse proxy with Authelia single sign-on.

Services I self-host include:

- **Media & files:** Immich (photos), Navidrome (music), Syncthing, Copyparty, Garage (S3-compatible storage), rclone
- **Networking & access:** Traefik, Authelia (SSO), AdGuard Home (DNS), NetBird (WireGuard mesh VPN), LibreSpeed
- **Productivity & dev:** Gitea (git hosting), Wakapi (coding stats), ntfy (notifications), Webtop (browser-based desktop)
- **AI:** local LLMs and tooling via Ollama, llama.cpp, Open WebUI and ComfyUI
- **Messaging:** Continuwuity (Matrix homeserver)
- **Monitoring:** Beszel
- Built on Docker Compose plus KVM virtual machines, documented and version-controlled
