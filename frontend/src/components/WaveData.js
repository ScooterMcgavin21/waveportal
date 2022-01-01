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
          address={wave.waver}
          timestamp={wave.timestamp}
        />
      ))}
    </WaveDataContainer>
  )
}
export default WaveData;

export const WaveDataContainer = styled.div`
  display: grid;
  height: 5rem;
  width: 100%;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;
