import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers } from "hardhat";
import { BenBKIsERC20 } from "../typechain-types/contracts/BenBKIsERC20.sol/BenBKIsERC20";

describe("BenBKIsERC20", function () {

  let token: BenBKIsERC20;

  before(async function() {
    [this.owner, this.addr1, this.addr2, this.addr3, ...this.addrs] = await ethers.getSigners();
    //const [owner, otherAccount] = await ethers.getSigners();
    const BenBKIsERC20 = await ethers.getContractFactory("BenBKIsERC20");
    token = await BenBKIsERC20.deploy();
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
