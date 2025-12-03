"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';
import { Container } from '../components/grid'
import CommonTitle from '../components/common-title'
import Image from 'next/image'


export default function features() {
    const compareFeatures = [
        {
            title: 'Our Mission',
            des: 'To simplify and humanize financial data empowering every investor to make informed, confident, and data-backed decisions with AI clarity.',
            img: '/img/about/fearures-shape-1.png',
        },
        {
            title: 'Our Vision',
            des: 'To become the most trusted AI-powered investment platform that bridges the gap between technology, transparency, and financial growth for all.',
            img: '/img/about/fearures-shape-2.png',
        },
    ]
    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle className='max-w-127 mb-8 md:mb-10 lg:mb-12 xl:mb-16' title={`<span class='font-light'>Compare</span> All Plan Features`} />
                <div className="">
                    {compareFeatures.map((item, index) => (
                        <motion.div
                            initial={{ x: y, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: `0.${index + 1}` }}
                            viewport={{ once: once, amount: 0.2, }}
                            key={index} className={`p-6 md:p-10 xl:p-12.5 rounded-2xl md:rounded-3xl xl:rounded-[30px] border-4 border-solid border-[rgba(255,255,255,0.16)] relative z-1 overflow-hidden max-w-3xl mb-8 last:mb-0 ${index === 1 ? 'ml-0 md:ml-26 lg:ml-35 xl:ml-87' : 'mr-0 md:mr-26 lg:mr-35'}`}>
                            <Image src={item.img} width={600} height={400} alt="" className={`h-full absolute top-0 ${index === 1 ? 'right-0' : 'left-0'}`} />
                            <h4 className='text-2xl xl:text-[28px] text-white font-ft-system font-normal leading-[130%] uppercase mb-3'>{item.title}</h4>
                            <p className='text-base md:text-xl xl:text-2xl text-[#C7C9D1] font-euclid font-light leading-[130%]'>{item.des}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
