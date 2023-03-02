import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SocialMediaIcons from '../../components/socialMediaIcons/SocialMediaIcons'

import "./store.css";

export default function Store() {
    return (
        <div className='store-wrapper-container'>
            <div>
                <Header />
            </div>
            <div className='store-content-container'>


            </div>
            <div className='store-footer-container'>
                <SocialMediaIcons />
                <Footer />
            </div>
        </div>
    )
}
