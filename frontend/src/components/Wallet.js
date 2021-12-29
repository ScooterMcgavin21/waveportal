import React from 'react';
import useWallet from '../hooks/useWallet';


function Wallet() {
  const { walletInstalled, walletConnected, loading, connectWallet, wave } = useWallet();
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
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
      {walletInstalled && !walletConnected && (
				<button className='button connect-button' onClick={connectWallet}>
					Connect MetaMask
				</button>
			)}
			{walletConnected && (
				<div>
					<button className="button wave-button" onClick={wave}>
						👋
          </button>
				</div>
			)}
    </div>
  )
}

export default Wallet;
