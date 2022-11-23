import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { NexiIsERC20 } from "../typechain-types/contracts/NexiIsERC20";

describe("NexiIsERC20", function () {

  let token: NexiIsERC20;

  before(async function() {
    [this.owner, this.addr1, this.addr2, this.addr3, ...this.addrs] = await ethers.getSigners();
    //const [owner, otherAccount] = await ethers.getSigners();
    const NexiIsERC20 = await ethers.getContractFactory("NexiIsERC20");
    token = await NexiIsERC20.deploy();
  })

  describe("Deployment verifications", function () {
    it("Should get the balanceOf the owner", async function () {
      let balanceOfOwner = await (await token.balanceOf(this.owner.address)).toString()
      let awaitedBalanceOfOwner = ethers.BigNumber.from('1000000').toString()
      assert.equal(balanceOfOwner, awaitedBalanceOfOwner)
    });
  });

  describe("Minting tokens function verifications", function() {
    it("Should mint X tokens if Owner of the Smart contract", async function() {
      let transaction = await token.mint(this.owner.address, ethers.BigNumber.from('1000000'))
      await transaction.wait(1)
      let balanceOfOwner = await (await token.balanceOf(this.owner.address)).toString()
      let awaitedBalanceOfOwner = ethers.BigNumber.from('2000000').toString()
      assert.equal(balanceOfOwner, awaitedBalanceOfOwner);
    })

    it("should NOT mint X tokens if NOT the Owner of the Smart contract", async function() {
      await expect(token.connect(this.addr1).mint(this.addr1.address, ethers.BigNumber.from('1000000'))).to.be.revertedWith('Ownable: caller is not the owner')
    })
  })
});
