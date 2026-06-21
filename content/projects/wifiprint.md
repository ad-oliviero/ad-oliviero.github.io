+++
title = "WifiPrint"
date = 2023-03-15
weight = 10

[extra]
tags = ["C", "Raspberry Pi Pico", "Embedded", "WiFi"]
github_url = "https://github.com/ad-oliviero/wifiprint"
accent = "#0ea5e9"
+++
A Raspberry Pi Pico W concept for printing at a shop by scanning a QR code instead of emailing.
<!-- more -->
WifiPrint was born from running a shop with a printing service: customers who can't easily
send an email struggle to get documents to the seller. The idea is a Pico W that broadcasts a
locked-down Wi-Fi access point, scan a QR code, join it, and a tiny web page lets you pick a
document that's uploaded straight to the shop's Telegram. It works, but honestly ran into the
Android captive-portal browser's JavaScript limits, so it stays a concept.

- Raspberry Pi Pico W broadcasting a restricted access point
- Upload-a-document web page delivering files via the Telegram API
- Built on the pico-sdk and lwIP in C
- Documented honestly, including the captive-portal limitation
