import React from 'react';
import useWallet from "../hooks/useWallet";
/**
 * Nav component returns the navbar with wallet connection style
 */
export default function Nav() {
  const {walletConnected} = useWallet();
  return (
    <header className="nav">
      <h1>Wave Portal</h1>
      <nav>
        {walletConnected && (
          <div className="nav-dot">
            <span className="dotConnected" />
            Wallet Connected
          </div>
        )}
      </nav>
    </header>
  )
}


