"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';
import { Container } from '../components/grid'
import CommonTitle from '../components/common-title'
import Image from 'next/image'

export default function investors() {
    const counted = [
        {
            title: '15K',
            des: 'Active Users',
        },
        {
            title: '2M',
            des: 'Data Points Tracked Daily',
        },
        {
            title: '100%',
            des: 'Encrypted Data Handling',
        },
    ]
    return (
        <div>
            <Container>
                <CommonTitle className='text-center mb-8 md:mb-10 lg:mb-12 xl:mb-16' title={`<span class='font-light'>Built by</span> Investors, For Investors.`} des={`Our team comes from diverse backgrounds finance, AI research, and data science united by one goal: to make professional-grade investing tools accessible to everyone. We believe in transparency, education, and empowering investors through data-driven clarity.`} />
                <div className="max-w-222 mx-auto mb-8 md:mb-10 lg:mb-12 xl:mb-16">
                    <motion.p
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2, }}
                        className='text-2xl text-[#C7C9D1] font-euclid font-normal leading-[130%] uppercase text-center mb-4'>Partnered with Trusted Data Providers</motion.p>
                    <div className="md:flex md:items-center justify-center gap-4 md:gap-10 lg:gap-16">
                        {counted.map((item, index) => (
                            <motion.div
                                initial={{ y: y, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: duration, delay: `0.${index + 1}` }}
                                viewport={{ once: once, amount: 0.2, }}
                                key={index} className="text-start md:text-center flex flex-col mb-5">
                                <h4 className='text-3xl md:text-5xl lg:text-6xl xl:text-[80px] text-white font-ft-system font-normal leading-[120%] mb-1'>{item.title}+</h4>
                                <p className='text-base md:text-lg lg:text-xl xl:text-2xl text-[#C7C9D1] font-euclid font-light leading-[150%]'>{item.des}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <motion.div
                    initial={{scale: .8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2, }}
                    className="relative z-1">
                    <Image src="/img/about/fearures-img.png" width={1920} height={600} alt="" className='max-w-full mx-auto' />
                    <div className='absolute bottom-0 left-0 bg-[linear-gradient(180deg,rgba(4,4,6,0)_0%,#040406_100%)] w-full h-45'></div>
                </motion.div>
            </Container>
        </div>
    )
}
