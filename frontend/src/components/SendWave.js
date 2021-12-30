import React, { useEffect, useState } from 'react';
import useWallet, { WriteStatus } from '../hooks/useWallet';
import './SendWave.css';
import WaveStatus from './WaveStatus';

function SendWave({ loading, writeLoading, totalWaves, wave }) {
  const {walletConnected} = useWallet();
  const [msg, setMsg] = useState("");

  /**
   * Hook to clear text input oncce written
   */
  useEffect(() => {
    if (writeLoading === WriteStatus.None) {
      setMsg("");
    }
  }, [writeLoading]);

  return (
    <div>
      <div className='textWrap'>
        <label htmlFor='message'>Write a message while you wave!</label>
        <textarea id='msg' className='textBox' value={msg} onChange={(event) => setMsg(event.target.value)} />
      </div>
      <section>
        {walletConnected && (
          <div>
            <button className="button wave-button" onClick={() => wave(msg)}>
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
