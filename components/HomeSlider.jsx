'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'

import { images } from './Images'

import 'swiper/css'
import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HomeSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section className='py-0 pb-0' >
      <div className='container max-w-max'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className='h-auto max-w-max '
      >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-100 w-full items-center justify-center object-cover'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
              <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
      </div>
    </section>
    </>
  )
}