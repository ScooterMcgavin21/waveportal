// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;
    uint256 private seed;
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
    /** mapping so can associate an address with a number, storing address with last time user waved */
    mapping(address => uint256) public lastWavedAt;
    constructor() payable {
        console.log("I is smart... contract");
        seed = (block.timestamp + block.difficulty) % 100; // sets the seed for random drawing
    }
    /**
    * combines two numbers 'block,difficulty' + 'block.timestamp' to generate a rand number
    * seed var changes every time a user sends a new wave
    */
    function wave(string memory _message) public {
        /** makesure current timestamp is 15 min bigger than last timestamp stored */
        require(lastWavedAt[msg.sender] + 2 minutes < block.timestamp, 'Wait 2 minutes before waving again.');
        /** updates current timestamp for user */
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log('%s has waved with message', msg.sender);
        waves.push(Wave(msg.sender, _message, block.timestamp));
        /** generate new seed for next user that sends a wave */
        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %d", seed);

        /** gives 50% chancce for user to win prize  */
        if (seed <= 50){
            console.log("%s won!", msg.sender);
            /** balance.(this).balance (balance of contract) has enough funds */
            uint256 prizeAmount = 0.0001 ether;
            require(prizeAmount <= address(this).balance, 'Attempt to withdraw more eth than the contract has');
            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, 'Yo, this contract cant even pay you out!');
        }
        emit NewWave(msg.sender, block.timestamp, _message);
    }
    /** returns the struct array, waves to make it easier to retrieve the waves from website */
    function getAllWaves() public view returns (Wave[] memory){
        return waves;
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves;
    }
}
