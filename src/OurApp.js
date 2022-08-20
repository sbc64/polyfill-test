import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from '@walletconnect/web3-provider';

function Connect() {

  useEffect(() => {
    console.log("HELLo:")
    async function connect() {
    const web3Modal = await new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions: {
        provider: WalletConnectProvider,
        options: {
          infuraId:  "8e90e8f704804f4190fa799073290b5a",
        }
      },
    });

      const instance = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
    }
    connect();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Connect;
