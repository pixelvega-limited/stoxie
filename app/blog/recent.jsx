"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';
import { Container } from '../components/grid';
import Image from 'next/image'
import Link from 'next/link';

export default function recent() {
    const card = [
        {
            img: '/img/blog-img.png',
            time: '11 Oct 2025',
            title: 'How Machine Learning Is Reshaping Investing.',
            des: 'Discover how artificial intelligence analyzes real-time data to deliver smarter faster investment insights.',
        },
        {
            img: '/img/blog-img.png',
            time: '11 Oct 2025',
            title: 'The Future of ETFs — What to Watch in 2025.',
            des: 'From thematic funds to active management, here’s how ETFs are evolving for modern investors.',
        },
        {
            img: '/img/blog-img.png',
            time: '11 Oct 2025',
            title: 'How to Build a Diversified Portfolio in a Volatile Market.',
            des: 'Learn how asset diversification protects your capital and balances long-term returns.',
        },
    ]
    return (
        <div className='common-padding relative z-1'>
            <Container>
                <div className="size-140 rounded-full absolute top-[30%] -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1"></div>
                <div className="size-140 rounded-full absolute bottom-[15%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1"></div>
                <motion.h3
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2, }}
                    className='mb-8 md:mb-10 lg:mb-14 xl:mb-16'><span className='font-light'>Recent</span> Blog</motion.h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-10 lg:mb-14 xl:mb-16">
                    {card.map((item, index) => (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: `0.${index + 1}` }}
                            viewport={{ once: once, amount: 0.2, }}
                            key={index}>
                            <Link href={`/blog/${index * 1}`} className='block group overflow-hidden p-2 border border-solid border-white/10 bg-white/5 rounded-xl md:rounded-2xl'>
                                <Image src={item.img} width={370} height={210} alt='blog image' className='w-full h-auto mb-3 rounded-xl transition-all duration-300 group-hover:scale-110' />
                                <div className="p-4">
                                    <span className='text-sm text-[#C7C9D1] font-euclid font-light leading-[120%] mb-2 block'>{item.time}</span>
                                    <h4 className='text-xl text-white font-euclid font-extrabold leading-[120%] capitalize mb-2'>{item.title}</h4>
                                    <p className='text-base text-[#C7C9D1] font-euclid font-normal leading-normal'>{item.des}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <motion.button
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2, }}
                    className='btn mx-auto flex items-center justify-center'><span>Read More Blog</span></motion.button>
            </Container>
        </div>
    )
}
