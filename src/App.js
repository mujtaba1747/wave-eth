import * as React from "react";
// import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        <span role="img" aria-label="kitty">😺</span> Hey there! <span role="img" aria-label="kitty">😺</span>
        </div>

        <div className="bio">
        I am Mujtaba and this is my first <b>Web3.0 Dapp</b>, cool Right ? <br/>Connect your Ethereum wallet and wave at me !
        <br/>
        Technical Details: <br/>
          Blockchain: Ethereum <br/>
          Network: Rinkeby Test Net
        </div>

        <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
      </div>
    </div>
  );
}
