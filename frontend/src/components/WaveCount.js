import React from 'react';
import useWallet from "../hooks/useWallet";

export default function waveCount() {
  const { loading, totalWaves} = useWallet();
  if(loading){
    return null;
  }
  return (
    <div className="totalWaves">
      Number of waves: {totalWaves} 
    </div>
  );
};
