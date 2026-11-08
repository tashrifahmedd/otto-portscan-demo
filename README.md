# otto-portscan-demo

A deliberately misconfigured demo app for testing Otto's port scanner.

It serves a trivial web app on port **3000**, but its Dockerfile also starts
**Redis on port 6379**, bound to all interfaces with no auth. The app only needs
port 3000, so the extra Redis port is an exposed backing service.

When Otto scans this repo, the port scanner flags `6379` as a `PORT-001`
(serious) finding — a backing data service reachable alongside the app.

This repo exists only to demonstrate that finding. Do not deploy it.
