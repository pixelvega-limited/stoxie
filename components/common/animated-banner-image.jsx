'use client';

import { duration, once } from '@/app/lib/animation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedBannerImage = ({
    image,
    height,
    width,
    alt = 'banner image',
    className,
}) => {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0.2 }}
            viewport={{ once: once, amount: 0.2 }}
            className='mt-10 md:mt-16 lg:mt-18 xl:mt-21'>
            <Image
                src={image}
                width={width}
                height={height}
                className={cn(`max-w-full mx-auto`, className)}
                alt={alt}
            />
        </motion.div>
    );
};

export default AnimatedBannerImage;

