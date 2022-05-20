import './App.css';
// These imports are important
import React, { useState, useEffect } from 'react';
import Web3 from 'web3-eth'


function App() {
  // this will trigger whenever the App function is called, which index.js runs at startup
  useEffect(() => {
    // Here we check if there is web3 support
    if (typeof web3 !== 'undefined') {
      window.web3 = new Web3(window.web3.currentProvider)
      // Check if its MetaMask that is installed
      if (window.web3.currentProvider.isMetaMask === true) {
        connectMetaMask();
      } else {
        // Another web3 provider, add support if you want
      }
    }else {
      // The browser has no web3 
      // Suggest the user to install a web3 compatible browser plugin
      throw new Error("No web3 support, redirect user to a download page or something :) ");
    }
  }, []);
  // connectMetaMask is used to connect to MetaMask and ask permission to grab account information
  function connectMetaMask() {
    // We need to make the connection to MetaMask work.
    // Send Request for accounts and to connect to metamask.
    window.web3.requestAccounts()
    .then((result) => {
      // Whenever the user accepts this will trigger
      console.log(result)
    })
    .catch((error) => {
      // Handle errors, such as when a user does not accept
      throw new Error(error);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <p> Welcome to your DAPP application</p>
      </header>
    </div>
  );
}

export default App;