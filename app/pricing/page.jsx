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
                innerClass='max-w-173'
                subtitle='Pricing Plans'
                title='Choose Your Plan.'
                des='Start free, then pick the plan that fits your investing style.'
                className='pb-15 3xl:pb-41 text-center min-h-150 md:min-h-200 lg:min-h-230 xl:min-h-250'
                is_btn_text='Start Free Trial - 30 Days Free'></Banner>
            <div className='pricing relative z-1 -mt-[440px] bg-[#121416] overflow-hidden! rounded-3xl w-fit mx-auto px-0!  '>
                <div className='size-140 rounded-full absolute -bottom-[50%] -right-[10%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]'></div>
                <Container className='px-0! overflow-hidden! rounded-3xl'>
                    <div className='py-6 md:py-10 xl:py-16 px-3 md:px-10 lg:px-20 xl:px-40 border-4 border-solid border-white/16 overflow-hidden! bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.06)_100%)] rounded-2xl md:rounded-3xl lg:rounded-[30px] relative z-1 '>
                        <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-1'>
                            <Image
                                src='/img/pricing-shape-left.png'
                                alt=''
                                width={500}
                                height={1000}
                                className='h-full'
                            />
                        </div>
                        <div className='absolute top-0 right-0 h-full overflow-hidden! -z-1'>
                            <Image
                                src='/img/pricing-shape-right.png'
                                alt=''
                                width={500}
                                height={1000}
                                className='h-full'
                            />
                        </div>
                        <motion.h3
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: duration, delay: 0 }}
                            viewport={{ once: once, amount: 0.2 }}
                            className='mb-6 md:mb-8 xl:mb-10 text-center'>
                            <span className='font-extralight'>
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

