const { expect } = require("chai");
const { ethers } = require("hardhat");

import * as Configs from "../config"

describe("Marketplace", function ()  {

    let Erc20TokenEth: any;
    let erc20TokenEth: any;
    let Erc20TokenBnb: any;
    let erc20TokenBnb: any;
    let BridgeEth: any;
    let bridgeEth: any;
    let BridgeBnb: any;
    let bridgeBnb: any;

    let owner: any;
    let addr1: any;
    let addr2: any;
    let validator: any;
    let zeroAddress = ethers.utils.getAddress(Configs.zeroAddress)


    beforeEach(async function() {
        [owner, addr1, addr2, validator] = await ethers.getSigners();

        Erc20TokenEth = await ethers.getContractFactory("Erc20");
        const nameErc20Eth = Configs.nameErc20Eth;
        const symbolErc20Eth = Configs.symbolErc20Eth;
        const decimals = Configs.decimals;
        const totalSupply = Configs.totalSupply;

        erc20TokenEth = await Erc20TokenEth.deploy(nameErc20Eth, symbolErc20Eth, decimals, ethers.utils.parseEther(totalSupply));
        await erc20TokenEth.deployed();


        BridgeEth = await ethers.getContractFactory("Bridge");

        bridgeEth = await BridgeEth.deploy(erc20TokenEth.address, validator.address);
        await bridgeEth.deployed();


        Erc20TokenBnb = await ethers.getContractFactory("Erc20");
        const nameErc20Bnb = Configs.nameErc20Bnb;
        const symbolErc20Bnb = Configs.symbolErc20Bnb;

        erc20TokenBnb = await Erc20TokenBnb.deploy(nameErc20Bnb, symbolErc20Bnb, decimals, ethers.utils.parseEther(totalSupply));
        await erc20TokenBnb.deployed();

        BridgeBnb = await ethers.getContractFactory("Bridge");

        bridgeBnb = await BridgeBnb.deploy(erc20TokenBnb.address, validator.address);
        await bridgeBnb.deployed();

    });

    describe("Deployment", function() {

        it("Should initialize correctly", async function() {
            expect(await bridgeEth.tokenAddress()).to.equal(erc20TokenEth.address);
            expect(await bridgeEth.validatorAddress()).to.equal(validator.address);

            expect(await bridgeBnb.tokenAddress()).to.equal(erc20TokenBnb.address);
            expect(await bridgeBnb.validatorAddress()).to.equal(validator.address);
        });
    });

    describe("Setters", function() {

        it("Should set correctly", async function() {
            await bridgeEth.setTokenAddress(erc20TokenBnb.address);
            expect(await bridgeEth.tokenAddress()).to.equal(erc20TokenBnb.address);

            await bridgeEth.setValidatorAddress(addr1.address);
            expect(await bridgeEth.validatorAddress()).to.equal(addr1.address);

            await bridgeBnb.setTokenAddress(erc20TokenEth.address);
            expect(await bridgeBnb.tokenAddress()).to.equal(erc20TokenEth.address);

            await bridgeBnb.setValidatorAddress(addr1.address);
            expect(await bridgeBnb.validatorAddress()).to.equal(addr1.address);

        });
    });

    describe("Tokens", function() {

        it("Should include Tokens", async function() {
            await bridgeEth.includeToken(erc20TokenEth.address, Configs.symbolErc20Eth);

            await expect(
                bridgeEth.includeToken(erc20TokenEth.address, Configs.symbolErc20Eth)).
                to.be.revertedWith("Token is already included");

            const token = await bridgeEth.tokens(erc20TokenEth.address);
            expect(token.symbol).to.be.equal(Configs.symbolErc20Eth);
            expect(token.tokenAddress).to.be.equal(erc20TokenEth.address);
            expect(token.status).to.be.equal(1);
        });

        it("Should exclude Tokens", async function() {
            await expect(
                bridgeEth.excludeToken(erc20TokenEth.address)).
                to.be.revertedWith("Token doesn't exist");

            await bridgeEth.includeToken(erc20TokenEth.address, Configs.symbolErc20Eth);
            await bridgeEth.excludeToken(erc20TokenEth.address);
        });
    });

    describe("Chain Id", function() {

        it("Should update Chain Id", async function() {
            expect(await bridgeEth.chains(1)).to.be.false;

            await bridgeEth.updateChainById(1);

            expect(await bridgeEth.chains(1)).to.be.true;

            await bridgeEth.updateChainById(1);

            expect(await bridgeEth.chains(1)).to.be.false;
        });
    });

    describe("Swap", function() {

        it("Should revert", async function() {
            await expect(bridgeEth.swap(
                    erc20TokenEth.address, 
                    ethers.utils.parseEther("1"), 
                    Configs.rinkebyChainId,
                    Configs.BnbChainId,
                    Configs.symbolErc20Eth,
                    1)).
                to.be.revertedWith("Chain From doesn't exist");

            await bridgeEth.updateChainById(Configs.rinkebyChainId);

            await expect(bridgeEth.swap(
                    erc20TokenEth.address, 
                    ethers.utils.parseEther("1"), 
                    Configs.rinkebyChainId,
                    Configs.BnbChainId,
                    Configs.symbolErc20Eth,
                    1)).
                to.be.revertedWith("Chain To doesn't exist");

            await bridgeEth.updateChainById(Configs.BnbChainId);

            await expect(bridgeEth.swap(
                erc20TokenEth.address, 
                ethers.utils.parseEther("1"), 
                Configs.rinkebyChainId,
                Configs.BnbChainId,
                Configs.symbolErc20Eth,
                1)).
            to.be.revertedWith("Token doesn't exist");

            await bridgeEth.includeToken(erc20TokenEth.address, Configs.symbolErc20Eth);

            await expect(bridgeEth.swap(
                erc20TokenEth.address, 
                ethers.utils.parseEther("1"), 
                Configs.rinkebyChainId,
                Configs.BnbChainId,
                Configs.symbolErc20Bnb,
                1)).
            to.be.revertedWith("Different symbols");


            await erc20TokenEth.mint(owner.address, ethers.utils.parseEther("100"));
            const swapInfo = await bridgeEth.swap(
                erc20TokenEth.address, 
                ethers.utils.parseEther("1"), 
                Configs.rinkebyChainId,
                Configs.BnbChainId,
                Configs.symbolErc20Eth,
                1);
            
            await expect(bridgeEth.swap(
                erc20TokenEth.address, 
                ethers.utils.parseEther("1"), 
                Configs.rinkebyChainId,
                Configs.BnbChainId,
                Configs.symbolErc20Eth,
                1)).
            to.be.revertedWith("Transaction exists already");

            expect(await erc20TokenEth.balanceOf(owner.address)).to.be.equal(ethers.utils.parseEther("99"));
        });
    });

    describe("Swap and redeem", function() {

        it("Should swap and redeem", async function() {
            await bridgeEth.updateChainById(Configs.rinkebyChainId);
            await bridgeEth.updateChainById(Configs.BnbChainId);
            await bridgeEth.includeToken(owner.address, Configs.symbolErc20Eth);
            await erc20TokenEth.mint(owner.address, ethers.utils.parseEther("100"));
            
            await expect(bridgeEth.swap(
                owner.address, 
                ethers.utils.parseEther("1"), 
                Configs.rinkebyChainId,
                Configs.BnbChainId,
                Configs.symbolErc20Eth,
                1)).to.emit(bridgeEth, "SwapInitialized").
                withArgs(owner.address, owner.address, ethers.utils.parseEther("1"), 1);


            let msg = ethers.utils.solidityKeccak256(
                ["address", "address", "uint256", "uint256"], 
                [owner.address, owner.address, ethers.utils.parseEther("1"), 1]
            );

            let signature = await owner.signMessage(ethers.utils.arrayify(msg));
            let sig = await ethers.utils.splitSignature(signature);

            await expect(bridgeEth.redeem(msg, ethers.utils.parseEther("1"), sig.v, sig.r, sig.s)).to.be.revertedWith("Transaction exists already");
            await expect(bridgeBnb.redeem(msg, ethers.utils.parseEther("1"), sig.v, sig.r, sig.s)).to.be.revertedWith("Validation failed");

            signature = await validator.signMessage(ethers.utils.arrayify(msg));
            sig = await ethers.utils.splitSignature(signature);

            await bridgeBnb.redeem(msg, ethers.utils.parseEther("1"), sig.v, sig.r, sig.s);
        });
    });
});