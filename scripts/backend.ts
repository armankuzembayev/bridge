import { ethers } from "hardhat";
import * as Configs from "../config"


const swapEvents = async() => {

    const contractEth = await ethers.getContractAt("Bridge", Configs.bridgeEthAddress);
    const [signer] = await ethers.getSigners();

    contractEth.on("SwapInitialized", async (from, to, amount, nonce) => {

        let msg = ethers.utils.solidityKeccak256(
            ["address", "address", "uint256", "uint256"], 
            [from, to, amount, nonce]
        );

        let signature = await signer.signMessage(ethers.utils.arrayify(msg));
        let sig = await ethers.utils.splitSignature(signature);
        console.log(
        `
            from: ${from}
            to: ${to}
            amount: ${amount}
            nonce: ${nonce}
            signature: ${sig}
        `)
    });
}

swapEvents();
