'use client';
import { duration, once, y } from '@/app/lib/animation';
import { Calender } from '@/app/lib/icons';
import CommonTitle from '@/components/common/common-title';
import PrimaryButton from '@/components/common/primary-button';
import { Container } from '@/components/grid';
import { motion } from 'framer-motion';
import Image from 'next/image';
import PlanTable from './plan-table';

export default function ComparePlans() {
    const free = [
        {
            name: 'Free 30-day trial.',
            icon: <Calender />,
        },
        {
            name: 'Free 30-day trial.',
            icon: <Calender />,
        },
        {
            name: 'Free 30-day trial.',
            icon: <Calender />,
        },
    ];
    return (
        <div id='compare-plans' className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[17%] -left-[10%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] z-1'></div>
            <Container className='xl:max-w-325'>
                <CommonTitle
                    className='mb-8 md:mb-12 lg:mb-16 text-center'
                    title={`<span class="font-extralight">Compare</span> All Plan Features`}
                />
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.2 }}
                    viewport={{ once: once, amount: 0.2 }}>
                    <div className='overflow-x-auto border border-solid border-white/16 rounded-2xl relative z-1 w-full custom-scrollbar'>
                        <Image
                            src='/img/plan-shape-left.png'
                            alt=''
                            width={530}
                            height={350}
                            className='h-full hidden xl:block absolute top-0 right-0 -z-1'
                        />
                        <Image
                            src='/img/plan-shape-right.png'
                            alt=''
                            width={530}
                            height={530}
                            className='h-auto hidden xl:block absolute top-0 left-0 -z-1'
                        />
                        <PlanTable />
                    </div>
                </motion.div>
                <div className='max-w-110 mx-auto pt-6 md:pt-10'>
                    <motion.h4
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='text-xl md:text-2xl text-heading text-center font-ft-system font-normal leading-[120%] mb-2 md:mb-3'>
                        No hidden fees. Cancel anytime.
                    </motion.h4>
                    <motion.p
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='text-sm md:text-base text-para text-center font-euclid font-normal leading-[150%] mb-3 md:mb-5 xl:mb-6 mx-auto max-w-83'>
                        Your data stays private. Transparent pricing. 30 days
                        free to explore.
                    </motion.p>
                    <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-6 md:mb-7.5'>
                        {free.map((item, index) => (
                            <motion.div
                                initial={{ y: y, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: duration,
                                    delay: `0.${index + 1}`,
                                }}
                                viewport={{ once: once, amount: 0.2 }}
                                key={index}
                                className='flex items-center gap-2 xl:gap-3'>
                                <div>{item.icon}</div>
                                <p className='text-xs md:text-base text-para font-euclid font-light leading-[130%] uppercase'>
                                    {item.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='mt-10 md:mt-[64px]'>
                        <PrimaryButton
                            text='Start Free Trial Now'
                            className='mx-auto flex justify-center items-center max-w-max'
                        />
                    </motion.div>
                </div>
            </Container>
        </div>
    );
}

