# ERC20 Token with Hardhat and Typescript

## Hardhat + Typescript : Créer, déployer, vérifier et tester un contrat de Token

This project was created with `npx hardhat`.
After install dependencies, you can launch a local blockchain with `npx hardhat node`, deploy smartcontract on local blockchain with `npx hardhat run scripts/deploy.ts --network localhost`, test it `npx hardhat test --network localhost`. Then and deploy on Goerli ETH Blockchain `npx hardhat run scripts/deploy.ts --network goerli`.

```
npx coverage
```
Get the test coverage of your smart contract. Here we have 100%.

```
npx testLocalhost
```
Test the smart contract on hardhat network

```
npx deployLocalhost
```
Deploy the smart contract on hardhat network

```
npx deployGoerli
```
Deploy the smart contract on goerli network