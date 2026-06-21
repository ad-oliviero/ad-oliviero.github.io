+++
title = "SnapYap"
date = 2025-12-17
weight = 8

[extra]
tags = ["Swift", "SwiftUI", "SwiftData", "iOS"]
github_url = "https://github.com/ad-oliviero/SnapYap"
accent = "#fb7185"
logo = "img/snapyap.png"
+++
An iOS app that pairs a snapped photo with a short voice note, you first Snap, then you Yap.
<!-- more -->
SnapYap captures a photo and attaches a quick spoken note to it, storing both together so you
can flip through a gallery of moments with their audio. It's built in SwiftUI with SwiftData
persistence, an AVFoundation capture-and-record flow, and Accelerate (vDSP) for audio signal
processing. Built together with the Test-Eagles Team.

- SwiftUI interface with SwiftData on-device persistence
- AVFoundation photo capture and voice-note recording
- Audio signal processing via the Accelerate framework
- Gallery with flip-to-detail interaction
