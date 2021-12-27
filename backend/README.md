# Wave Portal Backend

This is the backend of a Web3 app built with Solidity and Ethereum smart contracts.

## Getting started

Follow the steps below to run the project locally:

- Install dependencies: `npm install`
- List test accounts from your local hardhat node: `npx hardhat accounts`
- Compile smart contracts: `npx hardhat compile`
- Test contract: `npx hardhat run scripts/run.js`

### Local deployment

- Start your local hardhat node: `npx hardhat node`
- Deploy contract to local hardhat node: `npx hardhat run scripts/deploy.js --network localhost`

### Testnet deployment

- Deploy contract to rinkeby testnet: `npx hardhat run scripts/deploy.js --network rinkeby`
