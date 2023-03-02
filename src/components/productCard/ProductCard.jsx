import React from 'react'
import Shirt from './shirt2.png'
import './productCard.css'

export default function ProductCard() {
    return (
        <div className='product-card-wrapper-container'>
            <div className='product-card-first-block' style={{ backgroundColor: 'blue' }}>
                <img className='product-card-image' src={Shirt}></img>
            </div>
            <div className='product-card-second-block'>

            </div>
        </div>
    )
}
