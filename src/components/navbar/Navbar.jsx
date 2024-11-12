import React, { useState } from "react";
import { BrowserProvider } from "ethers";
import './navbar.css'
import { telegram,twitter,discord,medium } from "./imports";

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      setLoading(true);
      try {
        const provider = new BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      } finally {
        setLoading(false);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this feature.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-logo" href="#">FlexSwap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex_navbar" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Trade
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">swap</a></li>
                <li><a className="dropdown-item" href="#">Cross-chain</a></li>
                <li><a href="" className="dropdown-item">Buy crypto</a></li>
               
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Community
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#"><img src={twitter} alt="" /> Twitter</a></li>
                <li><a className="dropdown-item" href="#"><img src={discord} alt="" /> Discord</a></li>
                <li><a href="" className="dropdown-item"><img src={telegram} alt="" /> Telegram</a></li>
                <li><a href="" className="dropdown-item"><img src={medium} alt="" /> Medium</a></li>
               
              </ul>
            </li> 
          
            <li className="nav-item">
              <a className="nav-link" aria-disabled="true" href="https://medium.com/vipendrarajpoot2">Blog</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item dropdown">

              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select a network
              </a>
              <ul className="dropdown-menu"> 
               
                 <li><a className="dropdown-item "  href="#">Ethereum</a></li>
                 <li><a className="dropdown-item" href="#">Polygon</a></li>
                 <li><a className="dropdown-item" >solana</a></li>
                 <li><a className="dropdown-item">Arbitrum One</a></li>
                 <li><a className="dropdown-item">BNB Smart Chain</a></li>
                  
               
              
              </ul>
            </li>
            </ul>
            <button 
              onClick={connectWallet} 
              className="btn btn-primary btn-color"
              disabled={loading}
            >
              {loading ? "Connecting..." : walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
