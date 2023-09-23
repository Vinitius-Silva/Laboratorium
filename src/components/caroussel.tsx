"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';

export default function Caroussel() {
  return (
    <Box sx={{
      boxShadow: 3
    }}>

    <Swiper
        spaceBetween={50}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        className="mySwiper"
        >
        <SwiperSlide>
          <Image
            src="/images/1.png"
            fill
            alt="Picture of the author"
            priority={true}
            />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/2.webp"
            fill
            alt="Picture of the author"
            priority={true}
            />
        </SwiperSlide>
        <SwiperSlide><Image
            src="/images/3.webp"
            fill
            alt="Picture of the author"
            priority={true}
            />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};