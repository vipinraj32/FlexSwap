import React from 'react'
import './feature.css'
import { trustless,secure,crosschain,gasless,onestop,moblie } from './imports'
const Feature = () => {
  return (

    <div className="container mt-5 product_flex">
    <h1 className=' text-center'>Why choose FlexSwap ?</h1>
    <p className='flex-p  text-center '>We give you the best tools to build and access on MultiChains with the best liquidity and lowest rates.</p>
    <div className="row  r ">
    <div className="col-md-4 p-3 ">
          <div className="box1  p-3  ">
            <img src={crosschain} alt="trustless" />
            <h2 className='box'>Multichains Compatible</h2>
            <p className="box-p">
            All the prominent Blockchains can be accessed via ZeroSwap
            </p>
           
          </div>
        </div>
        <div className="col-md-4 p-3 ">
          <div className="box1  p-3  ">
            <img src={gasless} alt="trustless" />
            <h2 className='box'>ZeroGas</h2>
            <p className="box-p">
            You will no longer pay fees to miners for each transaction. We built meta transactions to pay for the gas on your behalf
            </p>
           
          </div>
        </div>
        <div className="col-md-4 p-3 ">
          <div className="box1  p-3  ">
            <img src={trustless} alt="trustless" />
            <h2 className='box'> 100%Trustless</h2>
            <p className="box-p">
            We have built a trustless experience of using DeFi, only you have access to your funds
            </p>
           
          </div>
        </div>
       </div>
       <div className="row">
    <div className="col-md-4 p-3 ">
          <div className="box2  p-3  ">
            <img src={moblie} alt="trustless" />
            <h2 className='box'>Moblie-Friendly</h2>
            <p className="box-p">
            You can access the products from any dApp browser or mobile wallet; we have redesigned it to be mobile-friendly
            </p>
           
          </div>
        </div>
        <div className="col-md-4 p-3 ">
          <div className="box2  p-3  ">
            <img src={onestop} alt="trustless" />
            <h2 className='box'>One Stop Shop for Defi</h2>
            <p className="box-p">
            One Stop Shop to Build, Launch, Trade and Earn
            </p>
           
          </div>
        </div>
        <div className="col-md-4 p-3 ">
          <div className="box1  p-3  ">
            <img src={secure} alt="trustless" />
            <h2 className='box'>Secured</h2>
            <p className="box-p">
            All our Contracts are audited with up to 99% accuracy rates assured by leading companies like Zokyo
            </p>
           
          </div>
        </div>
       </div>
   
  
    </div>
  )
}


export default Feature
