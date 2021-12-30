import { WriteStatus } from "./useWallet";

function useState(){
  const [currentAccount, setCurrentAccount] = useState(""); // store users wallet
  const [walletInstalled, setWalletInstalled] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [walletError, setWalletError] = useState(null);
  const [totalWaves, setTotalWaves] = useState(null);
  const [writeLoading, setWriteLoading] = useState(WriteStatus.None);
  
  return {
    currentAccount,
    setCurrentAccount,
    walletInstalled,
    setWalletInstalled,
    walletConnected,
    setWalletConnected,
    loading,
    setLoading,
    walletError,
    setWalletError,
    totalWaves,
    setTotalWaves,
    writeLoading,
    setWriteLoading
  };
  
};
export default useState;
