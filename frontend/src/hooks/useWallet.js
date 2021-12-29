import { ethers } from "ethers";
import { useEffect, useState } from 'react';
import wavePortalAbi from '../utils/WavePortal.json';
import useWindowFocus from './useWindowFocus';
const CONTRACT_ADDRESS = '0x4388085C278eb32AE414ed0c082c3e06dE73e8a7'; // contract address after deploy

export default function useWallet() {
  const { ethereum } = window;
  const isWindowFocused = useWindowFocus();

  
  
  const [currentAccount, setCurrentAccount] = useState(""); // store users wallet
  const [walletInstalled, setWalletInstalled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(null);
  const [walletError, setWalletError] = useState(null);
  const [totalWaves, setTotalWaves] = useState(null);
  const [writeLoading, setWriteLoading] = useState(false);

  /**
   * useEffect using windowfocus hook to login to metamask and set states
   */
  useEffect(() => {
    if (isWindowFocused) {
      const status = async () => {
        setWalletInstalled(getWalletInstalled());
        setWalletConnected(await getWalletConnected());
        setTotalWaves(await getTotalWaves());
        setLoading(false);
      };
      status();
    }
  }, [isWindowFocused]);

  /**
   * Connect Wallet method which 
   */
  const connectWallet = () => {
		ethereum
			.request({ method: "eth_requestAccounts" })
			.then((accounts) => {
				const [account] = accounts;
				setCurrentAccount(account);
			})
			.catch((error) => {
				setWalletError(error);
			});
	};
  /**
   * Write function to blockchain wave
   */
  const wave = async (reaction) => {
    setWriteLoading(true);
    const waveTxn = await writeWave(reaction);
    console.log("Mining...", waveTxn.hash);
    await waveTxn.wait();
    //console.log("Mined -- ", waveTxn.hash);
    console.log("Mined -- ", waveTxn.hash);
    setWriteLoading(false);
  }
  /**
   * return states and walletconnect
   */
  return { currentAccount, walletInstalled, walletConnected, loading, walletError, connectWallet, totalWaves, wave };
};
/**
 * function check Called in windowfocus hook to return 
 */
function getWalletInstalled() {
  return typeof window.ethereum !== 'undefined';
};
/**
 * function check called in windowfocus hook to return account
 */
async function getWalletConnected() {
  if (!window.ethereum) {
    return false;
  }

  const accounts = await window.ethereum.request({ method: 'eth_accounts' });
  if (accounts.length !==0) {
    const account = accounts[0];
    console.log('Found an authorized account: ', account);
  } else {
    console.log('No authorized accounts found, login to metamask');
  }
  return accounts.length !== 0;
}
/**
 * func to get totalWaves 
 */
async function getTotalWaves() {
  const contractABI = wavePortalAbi.abi;
  if (!window.ethereum) {
    return;
  }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);

  const totalWaves = await wavePortalContract.getTotalWaves();
  return totalWaves.toString();
  
};
/**
 * function to write to blockchain
 */
function writeWave(reaction) {
  const contractABI = wavePortalAbi.abi;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

  return wavePortalContract.wave(reaction);
};
