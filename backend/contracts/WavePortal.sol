// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalWaves;


    // wave event
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
    /**
    * stores an array of structs that contains the waves sent
    */
    Wave[] waves;

    constructor() {
        console.log("I am a smart contract");
    }
    // like a public API endpoint
    function wave(string memory _message) public {
        totalWaves += 1;
        console.log('%s has waved with message %s', msg.sender, _message);
        waves.push(Wave(msg.sender, _message, block.timestamp));  // store wave data in the array
        emit NewWave(msg.sender, block.timestamp, _message); // stores the arguments passed in transaction logs 
    }
    /**
     * returns the struct array, waves to make it easier to retrieve the waves from website
     */
    function getAllWaves() public view returns (Wave[] memory){
      return waves;
    }

    function getTotalWaves() public view returns (uint256) {
      console.log('We have %d total waves', totalWaves);
      return totalWaves;
    }
}
