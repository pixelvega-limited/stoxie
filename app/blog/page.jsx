'use client';

import { motion } from 'framer-motion';
import Banner from '../components/banner';
import CallToAction from '../components/call-to-action';
import Input from '../components/ui/input';
import { duration, once, y } from '../lib/animation';
import Recent from './recent';

export default function page() {
    return (
        <>
            <Banner
                className='text-center pb-25 md:pb-40 lg:pb-50 xl:pb-75 min-h-150 md:min-h-200 lg:min-h-230 xl:min-h-250'
                subtitle='Insights & Education'
                title='Learn. Grow. Invest Smarter.'
                des='Explore practical guides, market analysis, and AI-driven insights to help you make better investing decisions.'
                desClass='lg:max-w-200!'
                is_btn={false}>
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.6 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='max-w-177.5 mx-auto relative mt-8 md:mt-10 lg:mt-12.5'>
                    <Input
                        inputClass='!rounded-full min-h-14 md:min-h-16 lg:min-h-17 !pl-8'
                        placeholder='Enter your email for future updates...'
                    />
                    <button className='btn w-full md:w-max mt-3 md:mt-px md:absolute top-1/2 md:-translate-y-1/2 md:right-2'>
                        <span>Subscribe for Updates</span>
                    </button>
                </motion.div>
            </Banner>
            <Recent />
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

