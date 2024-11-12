
import React from 'react';
import './form.css'
const Form = () => {
  return (
    <div className="swap-form-container">
      <div className="swap-form-header">
        <span>Swap</span> | <span>Cross Chain</span> | <span>Limit</span> | <span>BTC</span>
        <span className="settings-icon">⚙️</span>
      </div>

      <div className="swap-form-content">
        <div className="swap-row">
          <div className="swap-box">
            <span className="swap-label">From</span>
            <div className="swap-token">
              <img src="https://via.placeholder.com/20" alt="WETH Icon" className="token-icon" /> 
              <div className="token-info">
                <span className="token-name">WETH</span>
                <span className="network">on Ethereum</span>
              </div>
            </div>
          </div>
          <div className="swap-arrow">⇄</div>
          <div className="swap-box">
            <span className="swap-label">To</span>
            <div className="swap-token">
              <img src="https://via.placeholder.com/20" alt="USDT Icon" className="token-icon" /> {/* Replace with actual USDT icon URL */}
              <div className="token-info">
                <span className="token-name">USDT</span>
                <span className="network">on Ethereum</span>
              </div>
            </div>
          </div>
        </div>

        <div className="amount-section">
          <div className="amount-label">You Sell</div>
          <div className="amount-value">0.0</div>
          <div className="balance">Balance: 0</div>
        </div>

        <button className="enter-amount-btn">Enter an amount</button>
      </div>
    </div>
  );
};

export default Form;

