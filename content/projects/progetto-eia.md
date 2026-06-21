+++
title = "Artificial Intelligence Project"
date = 2024-07-02
weight = 13

[extra]
tags = ["Rust", "Algorithms", "Graphs", "Academic"]
github_url = "https://github.com/ad-oliviero/progetto_eia"
accent = "#ef4444"
screenshots = ["img/progetto-eia/enron-bfs.png", "img/progetto-eia/roadnet-bidirectional.png", "img/progetto-eia/patents-uniform-cost.png"]
+++
A university AI-exam project in Rust running graph algorithms over large real-world datasets.
<!-- more -->
Built for the Elementi di Intelligenza Artificiale (Elements of AI) exam, this Rust project
runs graph search and analysis over large public SNAP datasets, from Bitcoin trust networks
and the Enron email graph to road networks and LiveJournal, scaling to millions of nodes and
edges. It includes memory profiling with massif and plotted benchmarks. (The written
documentation is in Italian.)

- Graph algorithms in Rust over real datasets up to millions of nodes/edges
- Stanford SNAP datasets with an automated download script
- Memory profiling (massif) and benchmark plots
