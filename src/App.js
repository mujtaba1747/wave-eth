import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        😺 Hey there! 😺
        </div>

        <div className="bio">
        I am Mujtaba and this is my first Web3.0 🔗 App, Cool Right ? Connect your Ethereum wallet and wave at me !
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
