import React from 'react';
import Wave from './Wave';
import './WaveData.css';
/**
 * maps through wave data from smart contract, stored in state hook 
 */
function WaveData({ allWaveData }) {
  if(!allWaveData) {
    return null;
  };
  return (
    <div className='allWaveData'>
      {allWaveData.map((wave, index) =>(
        <Wave 
          key={index}
          message={wave.message}
          address={wave.address}
          timestamp={wave.timestamp}
        />
      ))}
    </div>
  )
}

export default WaveData;
