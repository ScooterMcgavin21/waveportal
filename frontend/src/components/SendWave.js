import React from 'react';
import useWallet from '../hooks/useWallet';
import WaveCount from './WaveCount';

function SendWave() {
  const {wave, walletConnected, loading, writeLoading, totalWaves} = useWallet();
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
      <WaveCount loading={loading} writeLoading={writeLoading} totalWaves={totalWaves} />
    </div>
  )
}

export default SendWave;
