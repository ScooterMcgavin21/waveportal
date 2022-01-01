import React from "react";
import styled from "styled-components";
import Info from './components/Info';
import Nav from "./components/Nav/Nav";
import SendWave from "./components/SendWave";
import WaveData from "./components/WaveData";
import GlobalStyle from "./GlobalStyles";
import useWallet from "./hooks/useWallet";

function App() {
  const { walletInstalled, walletConnected, connectWallet, loading, writeLoading, totalWaves, wave, allWaveData } = useWallet();
  return (
    <>
    <GlobalStyle />
      <Nav />
      <Container>
        <Info />
        {/* <Wallet 
          loading={loading} 
          walletInstalled={walletInstalled}
          walletConnected={walletConnected}
          connectWallet={connectWallet}
        /> */}
        <SendWave 
          loading={loading}
          writeLoading={writeLoading}
          totalWaves={totalWaves}
          wave={wave}
        />
      
      </Container>
      <WaveData allWaveData={allWaveData} />
    </>
  );
}

export default App;
const Container = styled.div`
  display: grid;
  max-width: 50%;
  background: linear-gradient(65deg, #3a05c5, #44014c);
  
  place-items: center;
  text-align: center;
  justify-content: center;
  margin: 2rem auto;
  border-radius: 30px;   
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
  backdrop-filter: blur(0.8rem);
  padding: 1.5rem;
  border-radius: 1rem;
  animation: 1s cubic-bezier(0.16, 1, 0.3, 1) cardEnter;
`;
