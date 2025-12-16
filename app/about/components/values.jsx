'use client';
import { core_values } from '@/app/data/core-values';
import { duration, once, y } from '@/app/lib/animation';
import CommonTitle from '@/components/common/common-title';
import { Container } from '@/components/grid';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Values() {
    return (
        <div className='common-padding'>
            <Container className='xl:max-w-300'>
                <div className='flex flex-wrap md:flex-nowrap items-start justify-center gap-4 xl:gap-10'>
                    <div className='w-full max-w-90 lg:max-w-110 xl:max-w-142'>
                        <CommonTitle
                            className='mb-8'
                            title={`<span class='font-light'>Our</span> Core Values`}
                            desClass=''
                            des={`The principles that guide every feature we design.`}
                        />
                        <div className=''>
                            {core_values.map((item, index) => (
                                <motion.div
                                    initial={{ y: y, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: duration,
                                        delay: `0.${index + 1}`,
                                    }}
                                    viewport={{ once: once, amount: 0.2 }}
                                    key={index}
                                    className='flex items-start gap-2 mb-5 last:mb-0'>
                                    <div className='size-6 flex items-center justify-center bg-white/10 rounded-full mt-1'>
                                        {item.icon}
                                    </div>
                                    <div className=''>
                                        <h4 className='text-lg md:text-xl xl:text-2xl text-white font-ft-system font-normal leading-[130%] uppercase mb-2'>
                                            {item.title}
                                        </h4>
                                        <p className='text-base md:text-lg text-[#C7C9D1] font-euclid font-light leading-[130%]'>
                                            {item.des}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='w-full max-w-95 lg:max-w-110 xl:max-w-140 border-2 border-solid border-white/16 rounded-2xl md:rounded-[20px] bg-white/8 overflow-hidden'>
                        <Image
                            src='/img/about/values-img.png'
                            width={686}
                            height={501}
                            alt=''
                            className=''
                        />
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

