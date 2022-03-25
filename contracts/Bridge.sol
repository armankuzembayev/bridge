//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./interfaces/IERC20.sol";

import "@openzeppelin/contracts/access/AccessControl.sol";


contract Bridge is AccessControl {

    event SwapInitialized(address indexed from, address indexed to, uint256 amount, uint256 nonce);
    event RedeemInitialized(address indexed to, uint256 amount, bytes32 msg);

    bytes32 public constant ADMIN = keccak256("ADMIN");

    enum TransactionStatus {
        NONE,
        PRESENT,
        DELETED
    }

    struct Token {
        address tokenAddress;
        string symbol;
        TransactionStatus status;
    }

    mapping(bytes32 => bool) public transactions;
    mapping(uint256 => bool) public chains;
    mapping(address => Token) public tokens;

    address public tokenAddress;
    address public validatorAddress;

    constructor(address _erc20Contract, address _validatorAddress) {
        _setupRole(ADMIN, msg.sender);

        tokenAddress = _erc20Contract;
        validatorAddress = _validatorAddress;
    }

    function includeToken(address _contractAddress, string memory _symbol) public {
        require(
            tokens[_contractAddress].status != TransactionStatus.PRESENT, "Token is already included"
        );
        
        Token memory token = Token(_contractAddress, _symbol, TransactionStatus.PRESENT);
        tokens[_contractAddress] = token;
    }

    function excludeToken(address _contractAddress) public {
        require(tokens[_contractAddress].status == TransactionStatus.PRESENT, "Token doesn't exist");

        tokens[_contractAddress].status = TransactionStatus.DELETED;
    }

    function updateChainById(uint256 _chainId) public {
        if (chains[_chainId] == true) {
            chains[_chainId] = false;
        } else {
            chains[_chainId] = true;
        }
    }

    function swap(
        address _recipient, uint256 _amount, 
        uint256 _chainFrom, uint256 _chainTo,
        string memory _symbol, uint256 _nonce
    ) public {

        require(chains[_chainFrom] == true, "Chain From doesn't exist");
        require(chains[_chainTo] == true, "Chain To doesn't exist");

        require(tokens[_recipient].status == TransactionStatus.PRESENT, "Token doesn't exist");
        require(
            keccak256(abi.encodePacked(tokens[_recipient].symbol)) == 
            keccak256(abi.encodePacked(_symbol)), 
            "Different symbols"
        );

        bytes32 message = keccak256(abi.encodePacked(msg.sender, _recipient, _amount, _nonce));
        require(transactions[message] == false, "Transaction exists already");
        transactions[message] = true;

        IERC20(tokenAddress).burn(msg.sender, _amount);

        emit SwapInitialized(msg.sender, _recipient, _amount, _nonce);
    }

    function redeem(bytes32 _hash, uint256 _amount, uint8 v, bytes32 r, bytes32 s) public {
        bytes32 message = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _hash));
        
        require(validatorAddress == ecrecover(message, v, r, s), "Validation failed");

        IERC20(tokenAddress).mint(msg.sender, _amount);

        emit RedeemInitialized(msg.sender, _amount, _hash);
    }

    function setTokenAddress(address _tokenAddress) public onlyRole(ADMIN) {
        tokenAddress = _tokenAddress;
    }

    function setValidatorAddress(address _validatorAddress) public onlyRole(ADMIN) {
        validatorAddress = _validatorAddress;        
    }

}
