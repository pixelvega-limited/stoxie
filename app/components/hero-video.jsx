'use client';
import { duration, once } from '@/app/lib/animation';
import { motion } from 'framer-motion';

import { PauseIcon, PlayIcon } from 'lucide-react';
import { useRef, useState } from 'react';
const HeroVideo = () => {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setPlaying(true);
        } else {
            video.pause();
            setPlaying(false);
        }
    };
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            onClick={togglePlay}
            className='group cursor-pointer flex items-end justify-center  aspect-[1/.5] w-full mt-8 md:mt-12 lg:mt-16 relative z-1 rounded-t-3xl border md:border-2 lg:border-4 border-b-0! border-solid border-white/30 bg-white/10 backdrop-blur-2xl overflow-hidden'>
            <video
                ref={videoRef}
                className='pointer-events-none overflow-hidden rounded-t-3xl absolute top-0 left-0 w-full min-h-full h-auto'
                src='/video/video-1.mp4'
                poster='/img/home-banner-poster.png'
                controls={false}></video>
            <button
                className={`${
                    playing
                        ? 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
                        : 'opacity-100 visible'
                } relative z-1 m-3 size-20 md:size-22 lg:size-25 flex items-center justify-center rounded-full border border-solid border-white/40 bg-white/10 text-white backdrop-blur-xl`}>
                <span className='absolute top-1/2 left-1/2 -translate-1/2 text-2xl'>
                    {playing ? (
                        <PauseIcon className='absolute top-1/2 left-1/2 -translate-1/2' />
                    ) : (
                        <PlayIcon className='absolute top-1/2 left-1/2 -translate-1/2' />
                    )}
                </span>
                <span className='relative -z-1 -ml-2.5'>
                    <svg
                        width='500'
                        height='124'
                        viewBox='0 0 500 124'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <foreignObject
                            x='-100'
                            y='-100'
                            width='699.313'
                            height='324'>
                            <div
                                xmlns='http://www.w3.org/1999/xhtml'
                                style={{
                                    backdropFilter: 'blur(50px)',
                                    clipPath:
                                        'url(#bgblur_0_2056_591_clip_path)',
                                    height: '100%',
                                    width: '100%',
                                }}></div>
                        </foreignObject>
                        <g data-figma-bg-blur-radius='100'>
                            <path
                                d='M193 54.2936C193 24.3081 217.308 0 247.294 0H262.544C292.619 0 317 24.3809 317 54.4563C317 82.1208 337.742 105.389 365.225 108.555L499.313 124H317H193H0L144.579 108.269C172.129 105.271 193 82.006 193 54.2936Z'
                                fill='url(#paint0_linear_2056_591)'
                                fillOpacity='0.24'
                            />
                            <path
                                d='M247.294 0.5H262.544C292.343 0.500115 316.5 24.657 316.5 54.4561C316.5 82.3745 337.433 105.857 365.168 109.052L490.6 123.5H9.21777L144.634 108.766C172.437 105.74 193.5 82.2613 193.5 54.2939C193.5 24.5846 217.585 0.5 247.294 0.5Z'
                                stroke='white'
                                strokeOpacity='0.04'
                            />
                        </g>
                        <defs>
                            <clipPath
                                id='bgblur_0_2056_591_clip_path'
                                transform='translate(100 100)'>
                                <path d='M193 54.2936C193 24.3081 217.308 0 247.294 0H262.544C292.619 0 317 24.3809 317 54.4563C317 82.1208 337.742 105.389 365.225 108.555L499.313 124H317H193H0L144.579 108.269C172.129 105.271 193 82.006 193 54.2936Z' />
                            </clipPath>
                            <linearGradient
                                id='paint0_linear_2056_591'
                                x1='249.657'
                                y1='0'
                                x2='249.657'
                                y2='124'
                                gradientUnits='userSpaceOnUse'>
                                <stop stopColor='white' />
                                <stop
                                    offset='1'
                                    stopColor='white'
                                    stopOpacity='0.24'
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </button>
        </motion.div>
    );
};

export default HeroVideo;

