"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import { Verify } from '../../lib/icons'
import Image from 'next/image'

export default function choose() {
    const list = [
        {
            icon: <Verify />,
            title: 'Real-time stock data and analysis',
        },
        {
            icon: <Verify />,
            title: 'Historical performance tracking',
        },
        {
            icon: <Verify />,
            title: 'Customizable watchlists',
        },
        {
            icon: <Verify />,
            title: 'Export data and reports',
        },
        {
            icon: <Verify />,
            title: 'Mobile-friendly interface',
        },
        {
            icon: <Verify />,
            title: 'Regular data updates',
        },
    ]
    return (
        <div className='pb-10 md:pb-16 lg:pb-25 xl:pb-35 relative z-1'>
            <div className="size-140 rounded-full absolute bottom-[10%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1"></div>
            <motion.div
                initial={{ scale: .8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2, }}
                className="p-3 md:p-4 rounded-2xl border border-solid border-white/16 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8 mx-auto">
                <Image src="/img/lens/img.png" width={286} height={53} alt="" className='w-full h-auto rounded-xl md:rounded-2xl' />
                <div className="card-content">
                    <motion.h3
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2, }}
                        className='mb-2 md:mb-3'><span className='font-light'>Why</span> Choose Lens?</motion.h3>
                    <motion.p
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2, }}
                        className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-4 md:mb-6 xl:mb-8'>Cut through the noise and focus on what matters. Lens brings together all the critical data points you need to make informed investment decisions.</motion.p>
                    <ul className='mb-6 md:mb-8'>
                        {list.map((item, index) => (
                            <motion.li
                                initial={{ y: y, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: duration, delay: `0.${index + 1}` }}
                                viewport={{ once: once, amount: 0.2, }}
                                key={index} className='flex items-start gap-2.5 mb-2 md:mb-5'>
                                <div className="w-6 h-6">
                                    {item.icon}
                                </div>
                                <span className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal'>{item.title}</span>
                            </motion.li>
                        ))}
                    </ul>
                    <motion.button
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2, }}
                        className='btn btn-secondary mb-4 md:mb-0'><span>Try Lens Free – 30 Days</span></motion.button>
                </div>
            </motion.div>
        </div>
    )
}
