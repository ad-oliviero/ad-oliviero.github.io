+++
title = "AmazeD"
date = 2025-06-21
weight = 5

[extra]
tags = ["Unity", "C#", "iOS", "tvOS", "Multiplayer"]
accent = "#a855f7"
logo = "img/amazed.png"
website_url = "https://boniot.github.io/AmazeDSupport/"
+++
A macOS and Apple TV maze racing game that turns your iPhone into a motion controller.
<!-- more -->
AmazeD is a couch-multiplayer maze racing game built in Unity 6 that runs on macOS and
Apple TV. The game lives on the big screen as a four-player split-screen race; each
player pairs an iPhone over the local network and uses it as a motion controller —
tilt to steer, tap to act. Built during the Apple Developer Academy.

- Runs on macOS and tvOS; iPhones join over LAN purely as controllers
- Up to 4 players, split-screen, steering by gyro/accelerometer
- Netcode for GameObjects over UDP, plus a custom LAN-discovery beacon
- Per-slot reconnect grace period so a dropped phone keeps its place
- Universal Render Pipeline, runtime-generated labyrinths with NavMesh
- One codebase shipped to macOS, tvOS and iOS via a one-click Apple build pipeline
