import React, { useEffect, useState } from 'react';
import useWallet, { WriteStatus } from '../hooks/useWallet';
import './SendWave.css';
import WaveStatus from './WaveStatus';

function SendWave({ loading, writeLoading, totalWaves, wave }) {
  const {walletConnected} = useWallet();
  const [message, setMessage] = useState("");

  /**
   * Hook to clear text input oncce written
   */
  useEffect(() => {
    if (writeLoading === WriteStatus.None) {
      setMessage("");
    }
  }, [writeLoading]);

  return (
    <div>
      <div className='textWrap'>
        <label htmlFor='message'>Write a message while you wave!</label>
        <textarea id='message' className='textBox' value={message} onChange={(event) => setMessage(event.target.value)} />
      </div>
      <section>
        {walletConnected && (
          <div>
            <button className="button wave-button" onClick={() => wave(message)}>
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
