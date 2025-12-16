'use client';
import { duration, once, y } from '@/app/lib/animation';
import SecondaryButton from '@/components/common/secondary-button';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: `0.${index + 1}` }}
            viewport={{ once: once, amount: 0.2 }}
            className={`md:flex md:items-center md:gap-x-8 lg:gap-x-10 xl:gap-x-12 mb-8 md:mb-10 lg:mb-14 xl:mb-16 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}>
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
    );
};

export default ImageCard;

