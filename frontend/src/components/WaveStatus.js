import React from 'react';
import { WriteStatus } from '../hooks/useWallet';

const WriteLoadingMessage = {
  [WriteStatus.Request]: 'Checking wallet to make transaction',
  [WriteStatus.Pending]: 'Wave transaction in route',
}
function WaveStatus({ loading, writeLoading, totalWaves}) {
  if (loading) {
		return null;
	}
  if(writeLoading) {
    return(
      <div className="waveStatus">{WriteLoadingMessage[writeLoading]}</div>
    );
  }
  return (
    <div className="waveStatus">
      Number of waves: {totalWaves} 
    </div>
  )
}

export default WaveStatus;
