import React from 'react';


export default function waveCount({loading, writeLoading, totalWaves}) {
  if(loading){
    return null;
  }
  if (writeLoading) {
		return <div className='waveStatus'>Sending wave...</div>
	};
  return (
    <div className="waveStatus">
      Number of waves: {totalWaves} 
    </div>
  );
};
