'use client';
import { harderList } from '@/app/data/harder-list';
import { duration, once, y } from '@/app/lib/animation';
import { motion } from 'framer-motion';
import HarderCard from './harder-card';
export default function AskQuestions() {
    return (
        <div className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute top-[20%] -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1'></div>
            <div className='size-140 rounded-full absolute bottom-[15%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1'></div>
            <motion.h3
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='pb-8 md:pb-10 lg:pb-14 xl:pb-16'>
                <span className='font-light'>Ask Questions,</span> Get Instant
                Answers
            </motion.h3>
            <div className=''>
                {harderList.map((item, index) => (
                    <HarderCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

