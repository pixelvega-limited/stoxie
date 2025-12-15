'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '../../components/banner';
import CallToAction from '../../components/call-to-action';
import { Container } from '../../components/grid';
import { duration, once } from '../../lib/animation';
import Harder from '../patricia/harder.jsx';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-264'
                subtitle='Patricia - AI Investing Co-Pilot'
                title='Your AI Financial Analyst.'
                des='Ask anything from stock comparisons to risk breakdowns and get real-time insights in natural language. Patricia delivers answers with data, not guesswork.'>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0.2 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-26'>
                    <Image
                        src='/img/patricia/banner-img.png'
                        width={1000}
                        height={920}
                        className='max-w-full mx-auto'
                        alt=''
                    />
                </motion.div>
            </Banner>
            <Container>
                <Harder />
            </Container>
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days.'
            />
        </>
    );
}

