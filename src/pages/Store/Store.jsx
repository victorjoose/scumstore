import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import ProductCard from '../../components/productCard/ProductCard';
import SocialMediaIcons from '../../components/socialMediaIcons/SocialMediaIcons'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css"
import "./store.css";

export default function Store() {
    return (
        <div className='store-wrapper-container'>
            <div>
                <Header />
            </div>
            <div className='store-content-container'>
                <Swiper
                    breakpoints={{
                        // when window width is >= 0px
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        // when window width is >= 1250px
                        1250: {
                            slidesPerView: 3,
                            spaceBetween: 25
                        },
                        // when window width is >= 1550px
                        1550: {
                            slidesPerView: 4
                        }
                    }}
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
