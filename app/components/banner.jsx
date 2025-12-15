'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { duration, once, y } from '../lib/animation';
import { Container } from './grid';

export default function banner({
    className = 'text-center',
    bannerHeight = 'lg:min-h-screen',
    innerClass = '',
    subtitle,
    subtitleClass = '',
    title,
    titleClass = '',
    des,
    desClass = '',
    children,
    is_btn = true,
    is_btn_text = 'See Our Plans',
}) {
    return (
        <div
            className={cn(
                `relative z-1 ${bannerHeight} overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-48 xl:pt-56`,
                className
            )}>
            <div className='absolute top-0 left-0 w-full h-full -z-10 pointer-events-none'>
                <Image
                    src='/img/banner-bg.png'
                    alt=''
                    className='size-full object-cover object-top-left'
                    width={2400}
                    height={1100}
                    unoptimized
                    quality={100}
                />
            </div>
            <Container>
                <div className={`mx-auto ${innerClass}`}>
                    {subtitle && (
                        <motion.span
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: 0 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className={`block uppercase text-sm md:text-base lg:text-lg xl:text-xl leading-none! mb-2.5 sm:mb-3 lg:mb-4 text-sub-title ${subtitleClass}`}>
                            {subtitle}
                        </motion.span>
                    )}
                    <motion.h1
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0.2 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className={`text-4xl xs:text-[40px] sm:text-5xl md:text-6xl lg:text-[80px] leading-[110%]! mb-4 sm:mb-5 lg:mb-6 ${titleClass}`}>
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0.4 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className={`text-base xs:text-lg md:text-xl lg:text-2xl leading-normal! text-para max-w-[95%] md:max-w-150 lg:max-w-full mx-auto ${desClass}`}>
                        {des}
                    </motion.p>
                    {is_btn && (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: 0.6 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10'>
                            <a
                                href='#'
                                className='btn w-full sm:w-auto sm:min-w-77'>
                                <span>{is_btn_text}</span>
                            </a>
                        </motion.div>
                    )}
                </div>
                {children}
            </Container>
        </div>
    );
}

