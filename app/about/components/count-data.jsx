'use client';
import { counted } from '@/app/data/investors-count';
import { duration, once, y } from '@/app/lib/animation';
import { motion } from 'framer-motion';

const CountData = () => {
    return (
        <div className='max-w-222 mx-auto mb-8 md:mb-10 lg:mb-12 xl:mb-16'>
            <motion.p
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='text-2xl text-heading font-euclid font-normal leading-[130%] uppercase text-center mb-4'>
                Partnered with Trusted Data Providers
            </motion.p>
            <div className='md:flex md:items-center justify-center gap-4 md:gap-10 lg:gap-16'>
                {counted.map((item, index) => (
                    <motion.div
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: duration,
                            delay: `0.${index + 1}`,
                        }}
                        viewport={{ once: once, amount: 0.2 }}
                        key={index}
                        className='text-start md:text-center flex flex-col mb-5'>
                        <h4 className='text-3xl md:text-5xl lg:text-6xl xl:text-[80px] text-heading font-ft-system font-normal leading-[120%] mb-1'>
                            {item.title}+
                        </h4>
                        <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-para font-euclid font-light leading-[150%]'>
                            {item.des}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CountData;

