import { ethers, network } from "hardhat";
import { verify } from "../utils/verify";

async function main() {
  const BenBKToken = await ethers.getContractFactory("BenBKIsERC20");
  const benBKToken = await BenBKToken.deploy();

  await benBKToken.deployed();

  console.log(`Deployed smart contract at address ${benBKToken.address}`)

  if(network.name === "goerli") {
    console.log("Verifying the smart contract ...");
    await benBKToken.deployTransaction.wait(6)
    await verify(benBKToken.address, []);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
