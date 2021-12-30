import React from "react";
import './App.css';
import Info from "./components/Info";
import Nav from "./components/Nav";
import Wallet from "./components/Wallet";

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <Info />
        <Wallet />

      </div>
    </div>
  );
}

export default App;
