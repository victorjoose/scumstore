import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productCard/ProductCard';
import SocialMediaIcons from '../../components/socialMediaIcons/SocialMediaIcons'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import "./store.css";

export default function Store() {
    return (
        <div className='store-wrapper-container'>
            <div>
                <Header />
            </div>
            <div className='store-content-container'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    onSlideChange={console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>

                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                    <SwiperSlide><ProductCard /></SwiperSlide>
                </Swiper>
            </div>
            <div className='store-footer-container'>
                <SocialMediaIcons />
                <Footer />
            </div>
        </div >
    )
}
