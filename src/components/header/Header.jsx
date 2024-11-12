import React, { useState } from "react";
import './header.css'
import { BrowserProvider } from "ethers";
import flex from '../../assest/flexswap_header.png'


const Header = () => {
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
    <div className="npl_header section__margin" id="home">
    <div className="npl_header-content ">
      <h1 className="gradient__text text-focus-in">Everyone&apos;s Favorite Decentralized Exchange</h1>
      <p>FlexSwap is a decentralized financial platform empowering underserved communities with accessible, low-cost financial services. Using blockchain and smart contracts.</p>

      <div className="npl_header-content_input">
      <button 
              onClick={connectWallet} 
              className="btn btn-primary btn-color"
              disabled={loading}
            >
              {loading ? "Connecting..." : walletAddress ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
            </button>
            <button 
             onClick={connectWallet}
              className="btn btn-outline-primary lunch-btn"
              disabled={loading}
            >
               Lunch App
            </button>
      </div>

    </div>

    <div className="npl_header-image ">
      <img src={flex} />
    </div>
  </div>
  )
}

export default Header
