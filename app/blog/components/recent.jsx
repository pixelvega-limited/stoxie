'use client';
import { blogs } from '@/app/data/blogs';
import { duration, once, y } from '@/app/lib/animation';
import PrimaryButton from '@/components/common/primary-button';
import { Container } from '@/components/grid';
import { motion } from 'framer-motion';
import BlogCard from './blog-card';

export default function recent() {
    return (
        <div className='common-padding relative z-1'>
            <Container>
                <div className='size-140 rounded-full absolute top-[30%] -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1'></div>
                <div className='size-140 rounded-full absolute bottom-[15%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1'></div>
                <motion.h3
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='mb-8 md:mb-10 lg:mb-14 xl:mb-16'>
                    <span className='font-light'>Recent</span> Blog
                </motion.h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 md:mb-10 lg:mb-14 xl:mb-16'>
                    {blogs.map((item, index) => (
                        <BlogCard key={index} item={item} index={index} />
                    ))}
                </div>
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}>
                    <PrimaryButton
                        className='mx-auto w-max flex items-center justify-center'
                        text='Read More Blog'
                    />
                </motion.div>
            </Container>
        </div>
    );
}

