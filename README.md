# DMV Demolisher
#### An EthDenver 2020  submission

This is a collection of technology designed to provide a user interface for both ciizens and clerks to begin using Web 3.0 features.
Users are able to make a 3box account, tied to an Ethereum address, and from there they are able to request a verified credential from another user acting as the Clerk. 
Presently, this call reaches out to a backgroud check API but we imagine that it could instead be pointed to a Colorado API that allows users to submit their driver's license data and then receive an attestation if it is valid. 

We imagine that this can be built out tothen allow a user to access more government services, for instance, to transfer a car title as represesnted by a non-fungible token, after having received it from the DMV. 

## Setup and Tech Stack

For the tutorial, some familiarity with react is required. You can complete by copying and pasting each step, but to get a more meaningful understanding, it is recommended you are familiar with the basics.

- **React** — frontend framework
- **[IPFS](https://ipfs.io/)** + **[OrbitDB](https://orbitdb.org/)** — where the data is stored (provided by 3Box, so we don’t need to touch this directly)
- **[MetaMask](https://metamask.io/)** — Web3 wallet integration (required to facilitate signing and encryption of data)
- **[3Box.js](https://docs.3box.io/build/web-apps)** — 3Box SDK that connects wallets to IPFS database storage via 3ID
- React Bootstrap - UI Library

