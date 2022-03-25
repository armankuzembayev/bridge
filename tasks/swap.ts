import { task } from "hardhat/config";
import * as Configs from "../config"


task("swap", "Swap Between Networks")
    .addParam("token", "Token address")
    .addParam("recipient", "Recipient address")
    .addParam("amount", "Amount")
    .addParam("chainfrom", "Chain Id")
    .addParam("chainto", "Destinatin Chain Id")
    .addParam("symbol", "Token Symbol")
    .addParam("nonce", "Random number")
    .setAction(async  (taskArgs, { ethers }) => {

    const contract = await ethers.getContractAt("Bridge", taskArgs.token);
    
    const swapInfo = await contract.swap(
        taskArgs.recipient, 
        taskArgs.amount, 
        taskArgs.chainfrom, 
        taskArgs.chainto,
        taskArgs.symbol,
        taskArgs.nonce
    );

    console.log(swapInfo);
});