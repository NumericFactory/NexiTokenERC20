import { ethers, network } from "hardhat";
import { verify } from "../utils/verify";

async function main() {
  const NexiToken = await ethers.getContractFactory("NexiIsERC20");
  const nexiToken = await NexiToken.deploy();

  await nexiToken.deployed();

  console.log(`Deployed smart contract at address ${nexiToken.address}`)

  if(network.name === "goerli") {
    console.log("Verifying the smart contract ...");
    await nexiToken.deployTransaction.wait(6)
    await verify(nexiToken.address, []);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
