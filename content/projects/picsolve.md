+++
title = "PicSolve"
date = 2025-11-17
weight = 6

[extra]
tags = ["Swift", "SwiftUI", "iOS", "Machine Learning"]
github_url = "https://github.com/ad-oliviero/PicSolve"
accent = "#3b82f6"
+++
An iOS app that solves math problems straight from your camera, inspired by Photomath.
<!-- more -->
PicSolve lets you point your iPhone at a handwritten or printed equation and get it
recognised on-device. It pairs a SwiftUI interface with an AVFoundation camera pipeline and
runs the Pix2Text math-formula models locally through ONNX Runtime, used because those
models aren't available as CoreML.

- Live camera capture built on Apple's AVCam example
- On-device math formula detection and recognition (Pix2Text models)
- ONNX Runtime on iOS for models CoreML can't run
- Written in Swift & SwiftUI, MIT licensed
