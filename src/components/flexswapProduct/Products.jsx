import React from 'react'
import tradswap from '../../assest/trade-swap.png'
import tradswappurple from '../../assest/trade-swap-purple.png'
import buycrypto from '../../assest/trade-buy-crypto.png'
import buycryptopurple from '../../assest/trade-buy-crypto-purple.png'
import brigde from '../../assest/trade-bridge-purple.png'
import './products.css'
const Products = () => {
  return (
    <div class="container  mt-5 product_flex">
    <h1>FlexSwap Products</h1>
    <p className='flex-p'>Speed up your journey in DeFi with MultiChain and Cross Chain Compatible Products, crafted by FlexSwap.</p>
    
    <div class="row justify-content-center mt-4">
    
        <div class="col-md-4 mb-3 flex-cart">
            <div className="card h-100 box-shaw p-1 ">
                <img src={tradswappurple} class="card-img-top flex-img" alt="Exchange Icon"/>
                <div class="card-body">
                    <h5 class="card-title">Swap</h5>
                    <p class="card-text p-flex">
                        A liquidity aggregator that lets you swap on multiple chains with the best rates and no protocol fee.
                    </p>
                    <a href="#" className='nav-link a-flex'>Swap Now &gt;</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3 flex-cart">
            <div class="card h-100 shadow p-1 ">
                <img src={brigde} class="card-img-top flex-img" alt="Exchange Icon"/>
                <div class="card-body">
                    <h5 class="card-title">Bridge</h5>
                    <p class="card-text p-flex">
                        A liquidity aggregator that lets you swap on multiple chains with the best rates and no protocol fee.
                    </p>
                    <a href="#" className='nav-link a-flex'>Bridge Now &gt;</a>
                </div>
            </div>
        </div>
        
     
        <div class="col-md-4 mb-3 flex-cart">
            <div class="card h-100 shadow p-1 ">
                <img src={buycryptopurple} class="card-img-top flex-img" alt="DeFi Wizard Icon"/>
                <div class="card-body">
                    <h5 class="card-title">Buy Crypto
                    </h5>
                    <p class="card-text p-flex">
                        DeFi Wizard is a business product; create DeFi smart contract-based dashboards with a few clicks!
                    </p>
                    <a href="#" className='nav-link a-flex'>Buy Now &gt;</a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Products
