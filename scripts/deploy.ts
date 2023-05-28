import { ethers } from "hardhat";

async function main() {
  const XRC20 = await ethers.getContractFactory("XRC20Token");
  const myToken = await XRC20.deploy("Cryptia", "CP", 18, 100000000);

  await myToken.deployed();

  console.log("Token Successfully Deployed!");
  console.log("Token address:", myToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x47ae44b2003f2082140428CA5B3A6566332e6706