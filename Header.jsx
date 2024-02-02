import React from 'react'
import './Header.css'
import { headerBooks } from '../../Data/Data'
import { Link } from 'react-router-dom';
import headerShape from '../../assets/header-shape.svg'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import {GoArrowRight} from "react-icons/go"
import {GoArrowLeft} from "react-icons/go"


const Header = () => {
  return (
    <header>
        <div className="header-container">
        <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      modules={[Navigation,Pagination]}
      pagination={{el:".swiper-pagination", clickable: true }}
      navigation={
        {
            preE1:'.button-prev-slide',
            nextE1:'.button-next-slide'
        }
       
      }
    >
        {
            headerBooks.map(({title,info,img,btnLink},index)=>{
                return (
                    <SwiperSlide key={index}>
                        <div className="header-wrapper container ">
                        <div className="header-left">
                            <h1>{title}</h1>
                            <p dangerouslySetInnerHTML={{__html:info}}></p>
                            <Link className='btn btn-border'to={btnLink}>Learn More</Link>
                        </div>
                            <div className="header-right">
                                <img src={img} alt="" />
                            </div>
                           
                        </div>
                    </SwiperSlide>
                )
            })
        }
        <div className="slider-button">
            <div className="button-prev-slide slidebutton"><GoArrowLeft/></div>
            <div className="button-next-slide slidebutton"><GoArrowRight/></div>
        </div>
        <div className="container">
            <div className="swiper-pagination"></div>
        </div>
        </Swiper>
        <div className="header-shape">
        <img src={headerShape} alt="" />

        </div>
      
        </div>
    </header>
  )
}

export default Header