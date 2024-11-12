import React from 'react';
import { twitter,telegram,discord } from './imports';

import './footer.css'
function Footer() {
  return (
    <footer className="bg-light py-5 mt-5 footer-flex">
      <div className="container ">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4">
            <h3 className="mb-3">FlexSwap</h3>
            <p className='p-flex'>
              FlexSwap is a multi-chain compatible decentralized exchange aggregator protocol focused on making zero-fee transactions possible. Flexswap aims to make on-chain trading simple and easy by providing access to multi-chains like Ethereum, BSC, Polygon, Avalanche, Optimism, Celo, Fantom, Arbitrum, etc., under one roof. The design of the core product allows it to function gasless and focuses on aggregating liquidity from multiple protocols.
            </p>
          </div>

          {/* Links - Products */}
          <div className="col-md-2">
            <h5 className="flex-h5">Products</h5>
            <ul className="list-unstyled li-p ">
              <li>Bridge</li>
              <li>Staking</li>
              <li>Exchange</li>
              <li>Buy crypto</li>
              
            </ul>
          </div>

          {/* Links - Resources */}
          <div className="col-md-2">
            <h5 className=" flex-h5">Resources</h5>
            <ul className="list-unstyled li-p">
              <li>Distribution Model</li>
              <li>Press and Media</li>
            </ul>
          </div>

          {/* Links - Supported Chains */}
          <div className="col-md-2">
            <h5 className="flex-h5">Supported Chains</h5>
            <ul className="list-unstyled li-p">
              <li>Binance Smart Chain</li>
              <li>Polygon</li>
              <li>Avalanche</li>
              <li>Fantom</li>
              <li>Celo</li>
              <li>Optimism</li>
              <li>Arbitrum</li>
              <li>Polygon zkEVM</li>
              <li>Mode</li>
              <li>Base</li>
              <li>Manta</li>
            </ul>
          </div>

          {/* Links - About Us */}
          <div className="col-md-2">
            <h5 className="flex-h5">About Us</h5>
            <ul className="list-unstyled li-p">
              <li>Contact us</li>
              <li>Customer Support</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <p className="mb-0">Copyright ©2024</p>
          <div>
            <a href="#" className="text-dark me-3">
             <img src={twitter} alt="" />
            </a>
            <a href="#" className="text-dark me-3">
              <img src={telegram} alt="" />
            </a>
            <a href="#" className="text-dark">
              <img src={discord} alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
