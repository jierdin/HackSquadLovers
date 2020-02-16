# DMV Demolisher
#### An EthDenver 2020  submission
Youtube vid: https://youtu.be/RY-EJfxOj2o

## Summary:
This app, DMV Demolisher, is a credential wallet and messaging app,  that allows users to selectively reveal any single credential the identity has been given. Our vision is a world  free from the drudgery of dully decorated governmental dungeons. 
Our system allows people to turn their Colorado Digital ID or Driver's License into a verifiable claim on their 3box account using a secure chat thread to collect any necessary information  before the claim is issued by a clerk.The principles and technology contained in this demo point towards truly self-sovereign identity; where many sources of truth are used to evaluate  personhood.

This app is designed to provide a user interface for both ciizens and clerks to begin using Web 3.0 features.

We imagine that this can be built out to then allow a user to access more government services, for instance, to transfer a car title as represesnted by a non-fungible token, after having received it from the DMV. 

## Setup and Tech Stack

For the tutorial, some familiarity with react is required. You can complete by copying and pasting each step, but to get a more meaningful understanding, it is recommended you are familiar with the basics.

- **HD wallet** - for generation of pub/priv key pairs
- **P2P chat** - secure peer 2 peer messaging
- **React** — frontend framework
- **[IPFS](https://ipfs.io/)** + **[OrbitDB](https://orbitdb.org/)** — where the data is stored (provided by 3Box, so we don’t need to touch this directly)
- **[MetaMask](https://metamask.io/)** — Web3 wallet integration (required to facilitate signing and encryption of data)
- **[3Box.js](https://docs.3box.io/build/web-apps)** — 3Box SDK that connects wallets to IPFS database storage via 3ID
- React Bootstrap - UI Library

