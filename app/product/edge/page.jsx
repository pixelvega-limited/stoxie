'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '../../components/banner';
import CallToAction from '../../components/call-to-action';
import { Container } from '../../components/grid';
import { duration, once } from '../../lib/animation';
import Advantage from './advantage';
import Market from './market';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-230'
                subtitle='Edge - Premium Alerts Tool'
                title='Be First to Know When Markets Move.'
                des='Receive real-time alerts for earnings, price spikes, and volatility changes. Edge’s algorithm filters the noise - delivering only what matters.'>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.2 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-21'>
                    <Image
                        src='/img/edge/banner-img.png'
                        width={1000}
                        height={920}
                        className='max-w-full mx-auto'
                        alt=''
                    />
                </motion.div>
            </Banner>
            <Container>
                <div className='common-padding'>
                    <Market />
                    <Advantage />
                </div>
            </Container>
            <CallToAction
                title={`<span class='font-extralight'>Don't</span> Miss Your Next Signal.`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days.'
            />
        </>
    );
}

