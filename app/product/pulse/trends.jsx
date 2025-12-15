'use client';
import SecondaryButton from '@/components/common/secondary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { duration, once, y } from '../../lib/animation';

export default function trends() {
    const peak = [
        {
            title: "<span class='font-light'>Spot trends </span> before they peak.",
            des: 'Pulse scans thousands of data points to identify accelerating themes. Track what investors are buying and see where momentum is shifting.',
            img: '/img/pulse/img-1.png',
        },
    ];
    return (
        <div className='relative z-1'>
            <div className='size-140 rounded-full absolute top-0 -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1'></div>
            <motion.h3
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='mb-5 md:mb-10 lg:mb-14 xl:mb-16'>
                <span className='font-light'>Invest in </span> The Trends That
                Matter
            </motion.h3>
            {peak.map((item, index) => (
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: `0.${index + 1}` }}
                    viewport={{ once: once, amount: 0.2 }}
                    key={index}
                    className='md:flex md:items-center md:gap-x-8 lg:gap-x-10 xl:gap-x-12 mb-8 md:mb-10 lg:mb-14 xl:mb-16'>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='mb-6 md:mt-0 md:w-1/2'>
                        <Image
                            src={item.img}
                            width={569}
                            height={406}
                            alt=''
                            className='max-w-full mx-auto rounded-xl md:rounded-2xl'
                        />
                    </motion.div>
                    <div className='md:w-1/2'>
                        <h3
                            className='mb-4 max-w-110'
                            dangerouslySetInnerHTML={{
                                __html: item.title,
                            }}></h3>
                        <p className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-6 md:mb-8'>
                            {item.des}
                        </p>
                        <SecondaryButton
                            text='Try Lens Free – 30 Days'
                            type='link'
                            href='#'
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

