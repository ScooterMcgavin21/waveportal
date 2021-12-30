import React from "react";
import './App.css';
import Info from "./components/Info";
import Nav from "./components/Nav";
import SendWave from "./components/SendWave";
import Wallet from "./components/Wallet";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Info />
        <Wallet />
        <SendWave />
      </div>
    </div>
  );
}

export default App;
