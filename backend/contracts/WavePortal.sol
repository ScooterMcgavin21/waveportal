// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;

    event NewWave(address indexed from, uint256 timestamp, string message);
    /**
    * store address of the user who waves
    * the message the user sent
    * the timestamp when the user waved.
     */
    struct Wave {
        address waver; 
        string message; 
        uint256 timestamp; 
    }
    /** stores an array of structs that contains the waves sent */
    Wave[] waves;

    constructor() payable {
        console.log("I am a smart contract");
    }
    // like a public API endpoint
    function wave(string memory _message) public {
        totalWaves += 1;
        console.log('%s has waved with message %s', msg.sender);
      
        waves.push(Wave(msg.sender, _message, block.timestamp));  
        emit NewWave(msg.sender, block.timestamp, _message); // stores the arguments passed in transaction logs 
        /**initiate prize amt and has a require check to makesure contract balance is greater than 'prize
         * balance.(this).balance (balance of contract) has enough funds
         * (msg.sender) sends eth
         */
        uint256 prizeAmount = 0.0001 ether;
        require(prizeAmount <= address(this).balance, 'Attempt to withdraw more eth than the contract has');
        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, 'Yo, this contract cant even pay you out!');

    }
    /** returns the struct array, waves to make it easier to retrieve the waves from website */
    function getAllWaves() public view returns (Wave[] memory){
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}
