import { ethers } from "hardhat";

import * as Configs from "../config"

async function main() {

    const Bridge = await ethers.getContractFactory("Bridge");
    const bridge = await Bridge.deploy(Configs.erc20Contract, Configs.validatorContract);

    await bridge.deployed();

    console.log("ERC20 deployed to:", bridge.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

