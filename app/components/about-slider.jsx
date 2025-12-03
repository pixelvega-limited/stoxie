import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState, useEffect, useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from '../lib/icons';

export default function AboutSlider({ item }) {
    const Card = [
        {
            img: '/img/about/meet-img-1.png',
            name: 'Ralph Edwards',
            position: 'Co-Founder',
        },
        {
            img: '/img/about/meet-img-2.png',
            name: 'Bessie Cooper',
            position: 'CEO',
        },
        {
            img: '/img/about/meet-img-3.png',
            name: 'Jannette Black',
            position: 'UX Designer',
        },
        {
            img: '/img/about/meet-img-2.png',
            name: 'Ralph Edwards',
            position: 'CO-Founder',
        },
    ]

    const [isPrevSlide, setIsPrevSlide] = useState(true);
    const [isNextSlide, setIsNextSlide] = useState(false);
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsPrevSlide(swiperInstance.isBeginning);
            setIsNextSlide(swiperInstance.isEnd);
        }
    }, []);
    const prevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };
    const nextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const handleSlideChange = () => {
        const swiperInstance = swiperRef.current?.swiper;
        if (swiperInstance) {
            setIsPrevSlide(swiperInstance.isBeginning);
            setIsNextSlide(swiperInstance.isEnd);
        }
    };
    return (
        <div>
            <Swiper
                className='testimonial-slider'
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    481: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    }
                }}
                centeredSlides={false}
                pagination={false}
                grabCursor={true}
                loop={true}
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                modules={[Pagination]}
            >

                {Card.map((item, index) => (
                    <SwiperSlide className='mt-auto [&.swiper-slide-active]:mt-0' key={index}>
                        <div className="border w-full border-solid border-white/16 bg-[rgba(255,255,255,0.00)] rounded-2xl md:rounded-3xl lg:rounded-[30px] p-4 flex relative z-1">
                            <div className="h-full w-full relative z-1">
                                <Image src={item.img} width={369} height={405} alt="" className='h-full rounded-3xl object-cover' />
                            </div>
                            <div className="absolute bottom-7.5 left-1/2 -translate-x-1/2 text-center z-1">
                                <h4 className='text-lg md:text-xl text-white font-ft-system font-normal leading-[130%] mb-1'>{item.name}</h4>
                                <p className='text-sm text-[#C7C9D1] font-euclid font-light leading-[130%]'>{item.position}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-nav flex items-center justify-center gap-3 pt-8 md:pt-10 lg:pt-12 xl:pt-16">
                <button className="flex items-center justify-center p-8 md:p-10 xl:p-12 rounded-full border border-solid border-white/8 hover:bg-white/20" title='previous' onClick={prevSlide}>
                    <ArrowLeft />
                </button>
                <button className="flex items-center justify-center p-8 md:p-10 xl:p-12 rounded-full border border-solid -rotate-180 border-white/8 hover:bg-white/20" title='previous' onClick={nextSlide}>
                    <ArrowLeft />
                </button>
            </div>
        </div>
    )
}
