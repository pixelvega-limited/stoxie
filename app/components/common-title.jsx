'use client';

import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';

export default function CommonTitle({
    title,
    des,
    desClass = '',
    className = '',
    children,
}) {
    return (
        <div className={`${className}`}>
            <motion.h2
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[120%]! text-heading'
                dangerouslySetInnerHTML={{ __html: title }}
            />
            {des && (
                <motion.p
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.2 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className={`text-base md:text-lg lg:text-xl xl:text-2xl leading-normal! text-sub-title mt-4 mx-auto ${desClass}`}>
                    {des}
                </motion.p>
            )}
            {children && (
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.4 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='mt-4 md:mt-6 lg:mt-8'>
                    {children}
                </motion.div>
            )}
        </div>
    );
}

