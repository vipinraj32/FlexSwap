import React from 'react'
import './contact.css'
import Newsletter from '../../assest/Newsletter.webp'
const Contact = () => {
  return (
    <div className='container text-center mt-5'>
      <img src={Newsletter} alt="" className='mt-5 vibrate-1'/>
      <h1 className='mt-5 contract-flex' >Curious about Web3?</h1>
    <p className='flex-p'>Join <span className='span-flex'>1200+</span> subscribers and get WEB3 Weekly, ZeroSwap Newsletter <br />right in your Inbox</p>
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="input-group input-flex" style={{ maxWidth: '400px' }}>
        <input
          type="email"
          className="form-control p-2 "
          placeholder="Enter your Email"
          aria-label="Email"
          aria-describedby="button-addon"
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon"
          style={{
            backgroundColor:' #1fc7d4',
            border: 'none',
          }}
        >
          Sumbit
        </button>
      </div>
    </div>
    <div/>
    </div>
  
  )
}

export default Contact
