# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
## Scripts

```
yarn coverage
```
Get the test coverage of your smart contract. Here we have 100%.

```
yarn testLocalhost
```
Test the smart contract on hardhat network

```
yarn deployLocalhost
```
Deploy the smart contract on hardhat network

```
yarn deployGoerli
```
Deploy the smart contract on goerli network