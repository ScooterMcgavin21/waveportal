import React from 'react';
import useWallet from '../hooks/useWallet';
import WaveCount from './WaveCount';
function Wallet() {
  const { walletInstalled, walletConnected, loading, connectWallet, wave, writeLoading, totalWaves } = useWallet();
  if (loading) {
    return (<div>Loading...</div>);
  }
	
  return (
		<div>
			<section className='buttonGroup'>
				{!walletInstalled && (
					<a
						className='button NoWallet-button'
						href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related'
						target='_blank'
						rel='noopener noreferrer'
					>
						Install MetaMask
					</a>
				)}
				{/* {walletInstalled && !walletConnected && (
					<button className='button connect-button' onClick={connectWallet}>
						Connect MetaMask
					</button>
				)} */}
				{walletConnected && (
          <div>
            <button className="button wave-button" onClick={wave}>
              👋
            </button>
          </div>
        )}
				{walletInstalled && !walletConnected && (
					<button>
						<div className='buttonx' onClick={connectWallet}>
							<div className='slider1'></div>
							<div className='slider2'></div>
						</div>
					</button>
				)}
				<WaveCount loading={loading} writeLoading={writeLoading} totalWaves={totalWaves} />
			</section>
		</div>
  )
}

export default Wallet;
