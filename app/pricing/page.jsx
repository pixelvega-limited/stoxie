'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from '../components/banner';
import CallToAction from '../components/call-to-action';
import { Container } from '../components/grid';
import { duration, once, y } from '../lib/animation';
import Plan from './plan.jsx';
import Pricing from './pricing.jsx';

export default function page() {
    return (
        <>
            <Banner
                bannerHeight='h-[calc(100vh+140px)]'
                innerClass='max-w-173'
                subtitle='Pricing Plans'
                title='Choose Your Plan.'
                des='Start free, then pick the plan that fits your investing style.'
                className='text-center '
                is_btn_text='Start Free Trial - 30 Days Free'></Banner>

            <div className='pricing relative z-1 -mt-[65vh] md:-mt-[70vh] lg:-mt-[57vh] xl:-mt-[50vh]  bg-background overflow-hidden! rounded-2xl md:rounded-3xl w-full max-w-[95%] xl:max-w-full mx-auto px-0!'>
                <div className='size-80 md:size-140 rounded-full absolute -bottom-[20%] md:-bottom-[50%] -right-[20%] md:-right-[10%] blur-[200px] md:blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]'></div>
                <Container className='px-0! overflow-hidden! rounded-2xl md:rounded-3xl'>
                    <div className='py-6 xs:py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 px-3 xs:px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 border-2 md:border-4 border-solid border-white/16 overflow-hidden! bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_100%)] rounded-2xl md:rounded-3xl lg:rounded-[30px] relative z-1'>
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-1 opacity-50 md:opacity-100'>
                            <Image
                                src='/img/pricing-shape-left.png'
                                alt=''
                                width={500}
                                height={1000}
                                className='h-full object-cover object-left'
                            />
                        </div>
                        <div className='absolute top-0 right-0 h-full overflow-hidden! -z-1 opacity-50 md:opacity-100'>
                            <Image
                                src='/img/pricing-shape-right.png'
                                alt=''
                                width={500}
                                height={1000}
                                className='h-full object-cover object-right'
                            />
                        </div>
                        <motion.h3
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: 0 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='mb-6 md:mb-8 xl:mb-10 text-center text-3xl md:text-4xl lg:text-5xl'>
                            <span className='font-extralight block sm:inline'>
                                Pick the Plan{' '}
                            </span>{' '}
                            That Suits You Best
                        </motion.h3>
                        <Pricing />
                    </div>
                </Container>
            </div>

            <Plan />
            <CallToAction
                title={`<span class='font-extralight'>Ready to</span> Get Your Edge?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

