'use client';
import { duration, once } from '@/app/lib/animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
const AnimatedFeaturedImage = ({ image, height, width, alt, className }) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2 }}
            className='relative z-1'>
            <Image
                src={image}
                width={width}
                height={height}
                alt={alt}
                className={cn('max-w-full mx-auto', className)}
            />
            <div className='absolute bottom-0 left-0 bg-[linear-gradient(180deg,rgba(4,4,6,0)_0%,#040406_100%)] w-full h-45'></div>
        </motion.div>
    );
};

export default AnimatedFeaturedImage;

