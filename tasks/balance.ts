import { task } from "hardhat/config";
import * as Configs from "../config"


task("balance", "Swap Between Networks")
    .addParam("token", "Token address")
    .addParam("user", "User's address")
    .setAction(async  (taskArgs, { ethers }) => {

    const contract = await ethers.getContractAt("Erc20", taskArgs.token);
    
    const balance = await contract.balanceOf(taskArgs.user);

    console.log(ethers.utils.formatEther(balance));
});