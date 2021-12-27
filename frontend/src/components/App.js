import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import abi from '../utils/WavePortal.json';
import './App.css';
function App() {

  const [currentAccount, setCurrentAccount] = useState(""); // store users wallet
  const contractAddress = '0x85296f47552325b6037224fD47610F3dc2690505'; // contract address after deploy
  const contractABI = abi.abi;  // referebce abi content
  
  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * connectWallet method here
  */
  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * Call contract function that retrieves the total number of waves
   */
  const wave = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
        
        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  
  return (
    <div>
      <header className="main-header">
        <h1>Wave Portal</h1>
        <nav className="nav"></nav>
      </header>
      <main>
        <div className="card">
          <p>Connect to an Ethereum Wallet and wave at me!</p>
          {!currentAccount && 
            <button className="button" onClick={connectWallet}>
              Connect Wallet
            </button>
          }
          {currentAccount && 
            <button className="button" onClick={wave}>
              Wave
            </button>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
