import React from 'react';
import useWallet from '../hooks/useWallet';


function Wallet() {
  const { walletInstalled, walletConnected, loading, walletError, connectWallet, wave } = useWallet();
  if (loading) {
    return (<div>Loading...</div>);
  }
  return (
    <div>
      {!walletInstalled && (
				<a
					className='button buttonNoWallet'
					href='https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related'
					target='_blank'
					rel='noopener noreferrer'
				>
					Install MetaMask
				</a>
			)}
      {walletInstalled && !walletConnected && (
				<button className='button' onClick={connectWallet}>
					Connect MetaMask
				</button>
			)}
      {walletConnected && (
				<div>
					<span className="dotConnected" />
					Wallet Connected
				</div>
			)}
			{walletConnected && (
				<div>
					<button className="button" onClick={wave}>
              Wave
            </button>
				</div>
			)}
    </div>
  )
}

export default Wallet;
