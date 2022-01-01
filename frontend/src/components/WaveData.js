import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';
/**
 * maps through wave data from smart contract, stored in state hook 
 */
function WaveData({ allWaveData }) {
  if(!allWaveData) {
    return null;
  };
  return (
    <WaveDataContainer>
      {allWaveData.map((wave, index) =>(
        <Wave 
          key={index}
          message={wave.message}
          waver={wave.waver}
          timestamp={wave.timestamp}
        />
      ))}
    </WaveDataContainer>
  )
}
export default WaveData;

export const WaveDataContainer = styled.div`

  justify-content: center;
  width: 50%;
  margin-left: 25rem;
  overflow-y: scroll;
  height: 175px;
  
 
`;
