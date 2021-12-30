import React from 'react';
import useWallet from "../hooks/useWallet";
import WaveStatus from './WaveStatus';
function SendWave() {
  const {walletConnected, wave, loading, writeLoading, totalWaves} = useWallet();

  return (
    <div>
      <section>
        {walletConnected && (
          <div>
            <button className="button wave-button" onClick={wave}>
              👋
            </button>
          </div>
        )}
        </section>
        <WaveStatus loading={loading} writeLoading={writeLoading} totalWaves={totalWaves} />
    </div>
  );
}

export default SendWave
