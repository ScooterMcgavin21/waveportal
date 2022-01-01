import React from 'react';
import styled from 'styled-components';
import { WriteStatus } from '../hooks/useWallet';
import Spinner from './Spinner/Spinner';
const WriteLoadingMessage = {
  [WriteStatus.Connect]: 'Connect to ethereum wallet to continue.',
  [WriteStatus.Request]: 'Checking wallet to make transaction.',
  [WriteStatus.Pending]: 'Wave transaction in route.',
}
function WaveStatus({ loading, writeLoading, totalWaves}) {
  if (loading) {
		return null;
	}
  if(writeLoading) {
    return(
      <WaveStatusx>
        <p>{WriteLoadingMessage[writeLoading]}</p>
          <Spinner />
      </WaveStatusx>
    );
  }
  return (
    <WaveStatusx>
      Number of waves ➡️  {totalWaves} 
    </WaveStatusx>
  )
}

export default WaveStatus;

const WaveStatusx = styled.div`
  margin-bottom: 1rem;
`;
