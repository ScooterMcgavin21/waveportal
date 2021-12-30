import React from 'react';
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
      <div className="waveStatus">
        <p>{WriteLoadingMessage[writeLoading]}</p>
        <div className='spindin'>
          <Spinner />
        </div>
      </div>
    );
  }
  return (
    <div className="waveStatus">
      Number of waves: {totalWaves} 
    </div>
  )
}

export default WaveStatus;
