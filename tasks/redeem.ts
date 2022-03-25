import { task } from "hardhat/config";
import * as Configs from "../config"


task("redeem", "Redeem Tokens")
    .addParam("token", "Token address")
    .addParam("hash", "Message Hash")
    .addParam("amount", "Amount")
    .addParam("v", "Recovery param")
    .addParam("r", "Public point param (r)")
    .addParam("s", "Public point param (s)")
    .setAction(async  (taskArgs, { ethers }) => {

    const contract = await ethers.getContractAt("Bridge", taskArgs.token);
    
    await contract.redeem(
        taskArgs.hash, 
        taskArgs.amount, 
        taskArgs.v, 
        taskArgs.r,
        taskArgs.s
    );

});