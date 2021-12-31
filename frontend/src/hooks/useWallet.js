import { ethers } from "ethers";
import { useCallback, useEffect, useState } from 'react';
import wavePortalAbi from '../utils/WavePortal.json';
import useWindowFocus from './useWindowFocus';
const CONTRACT_ADDRESS = '0x4388085C278eb32AE414ed0c082c3e06dE73e8a7'; // contract address after deploy
/**
 * Writing loading status when waving
 */
export const WriteStatus = {
  None: 0,
  Connect: 1,
  Request: 2,
  Pending: 3,
};
export default function useWallet() {
  const { ethereum } = window;
  const isWindowFocused = useWindowFocus();

  const [currentAccount, setCurrentAccount] = useState(""); // store users wallet
  const [walletInstalled, setWalletInstalled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(null);
  const [walletError, setWalletError] = useState(null);
  const [totalWaves, setTotalWaves] = useState(null);
  const [writeLoading, setWriteLoading] = useState(WriteStatus.None);
  const [allWaveData, setAllWaveData] = useState([]);

  /**
   * Update Wallet status on mount
   */
  // const status = async () => {
  //   setWalletInstalled(getWalletInstalled());
  //   setWalletConnected(await getWalletConnected());
  //   waveUpdate();
  //   setLoading(false);
  // };

  const waveUpdate = useCallback(() => {
    const updateRun = async () => {
      setTotalWaves(await getTotalWaves());
      setAllWaveData(await getAllWaves());
    };
    updateRun();
  }, [setTotalWaves, setAllWaveData]); 

  useEffect(() => {
    // checking the status when window focus chaange
    if(isWindowFocused){
    }
    const updateRun = async () => {
      setWalletInstalled(getWalletInstalled());
      setWalletConnected(await getWalletConnected());
      waveUpdate();
      setLoading(false);
    };
    updateRun();
  }, [isWindowFocused, setWalletInstalled, setWalletConnected, waveUpdate, setLoading]);



  /**
   * Connect Wallet method which 
   */
  const connectWallet = () => {
		return ethereum
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
  const wave = async ( msg) => {
    if(!walletInstalled) {
      return;
    }
    // [WriteStatus.Connect] msg to connect to wallet if not already
    if (!walletConnected) {
      setWriteLoading(WriteStatus.Connect);
      await connectWallet();
      setWalletConnected(await getWalletConnected());
    }
    setWriteLoading(WriteStatus.Request);
    /**
     * Disable Spinner loader once transaction request is rejected
     */
    writeWave(msg)
      .then(async (waveTxn) => {
        setWriteLoading(WriteStatus.Pending);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        waveUpdate();
        setWriteLoading(WriteStatus.None);
      })
      .catch((error) => {
        console.error(error);
        setWriteLoading(WriteStatus.None);
      });
  }
  /**
   * return states and walletconnect
   */
  return { currentAccount, walletInstalled, walletConnected, loading, walletError, connectWallet, totalWaves, wave, writeLoading, allWaveData };
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
function writeWave(msg) {
  const contractABI = wavePortalAbi.abi;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

  return wavePortalContract.wave( msg);
};

/**
 * calling getAllWaves method from smart contract to get all waves, handles storing messages
 */
async function getAllWaves() {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const wavePortalContract = new ethers.Contract(CONTRACT_ADDRESS, wavePortalAbi.abi, provider);

  // calls getAllWaves method from contract
  const waves = await wavePortalContract.getAllWaves();

  if(!waves) {
    return [];
  }

  const normalizeWave = (wave) => ({
    message: wave.message,
    address: wave.address,
    timeStamp: new Date(wave.timeStamp * 1000)
  });

  return waves.map(normalizeWave).sort((a,b) => b.timeStamp - a.timeStamp);
};
