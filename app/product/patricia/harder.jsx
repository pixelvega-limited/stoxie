"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Image from 'next/image';
export default function harder() {
    const harderList = [
        {
            title: "<span class='font-light'>Analyze smarter,</span> not harder.",
            des: 'Type ‘Compare Tesla vs. Apple,’ and Patricia instantly shows key metrics: P/E, earnings, market cap, and growth trends simplified in one view.',
            name: 'Try Lens Free – 30 Days',
            img: '/img/patricia/harder-1.png'
        },
        {
            title: "<span class='font-light'>Your financial </span> \ co-pilot that <br/> never sleeps.",
            des: 'Patricia is available anytime, anywhere — tracking updates, answering questions, and learning your preferences to give you sharper insights over time.',
            name: 'Try Lens Free – 30 Days',
            img: '/img/patricia/harder-2.png'
        },
    ];
    return (
        <div className='common-padding relative z-1'>
            <div className="size-140 rounded-full absolute top-[20%] -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1"></div>
            <div className="size-140 rounded-full absolute bottom-[15%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1"></div>
            <motion.h3
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2, }}
                className='pb-8 md:pb-10 lg:pb-14 xl:pb-16'><span className='font-light'>Ask Questions,</span> Get Instant Answers</motion.h3>
            <div className="">
                {harderList.map((item, index) => (
                    <motion.div
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: `0.${index + 1}` }}
                        viewport={{ once: once, amount: 0.2, }}
                        key={index} className='card bg-[#040406] border border-solid border-white/12 rounded-2xl p-4 mb-6 md:mb-8'>
                        <div className={`w-full py-4 md:p-5 lg:p-8.5 mb-6 md:mb-8 xl:mb-10 ${index === 0 ? 'max-w-178' : 'max-w-220'}`}>
                            <h3 className="mb-2" dangerouslySetInnerHTML={{ __html: item.title }} />
                            <p className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-6 md:mb-8'>{item.des}</p>
                            <motion.button
                                initial={{ y: y, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: duration, delay: 0 }}
                                viewport={{ once: once, amount: 0.2, }}
                                className='btn btn-secondary'><span>{item.name}</span></motion.button>
                        </div>
                        <motion.div
                            initial={{ scale: .8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: duration, delay: 0 }}
                            viewport={{ once: once, amount: 0.2, }}
                            className="w-full ">
                            <Image src={item.img} width={922} height={453} alt="" className='w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl' />
                        </motion.div>

                    </motion.div>
                ))}
            </div>
        </div>
    )
}
