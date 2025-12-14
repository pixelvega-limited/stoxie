'use client';

import { motion } from 'framer-motion';
import Banner from '../components/banner';
import CallToAction from '../components/call-to-action';
import { Container } from '../components/grid';
import Input from '../components/ui/input';
import { duration, once, y } from '../lib/animation';
import { Comment, Solution, Support } from '../lib/icons';

export default function page() {
    const items = [
        {
            icon: <Support />,
            title: 'Premium Support',
            des: 'Get help from a product expert.',
        },
        {
            icon: <Solution />,
            title: 'Customer Solutions',
            des: 'Get advice tailored to your team’s goals',
        },
    ];

    return (
        <>
            <Banner
                innerClass='max-w-203.5'
                className='text-center min-h-150 md:min-h-200 lg:min-h-230 xl:min-h-250'
                subtitle='We’re Here to Help'
                title='Need assistance? Let’s connect.'
                des='Whether you have a question, need help with your account, or want to learn more about Stoxie, our team is here to help.'
                desClass='lg:max-w-200!'
                is_btn={false}></Banner>
            <div className='common-padding pt-0! relative z-2 -mt-50 md:-mt-85'>
                <Container>
                    <motion.div
                        initial={{ y: y, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: duration, delay: 0 }}
                        viewport={{ once: once, amount: 0.2 }}
                        className='border-0 md:border-2 lg:border-4 border-white/40 md:bg-white/10 backdrop-blur-[100px] p-0 md:p-8 lg:p-10 md:rounded-3xl flex flex-wrap gap-6'>
                        <div className='p-5 md:p-8 lg:p-11 border border-solid border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.00)_100%)] xl:max-w-160 w-full rounded-2xl md:rounded-3xl lg:rounded-4xl'>
                            <div className='mb-6 md:mb-10 lg:mb-12'>
                                <Comment />
                                <h4 className='text-2xl leading-none mt-4'>
                                    Talk to sales
                                </h4>
                                <p className='text-base mt-3'>
                                    Complete the thought build better insights.
                                </p>
                            </div>
                            <div className='flex flex-col gap-y-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <Input
                                        type='text'
                                        label='Name'
                                        placeholder='Jenny Wilson'
                                    />
                                    <Input
                                        type='email'
                                        label='Email'
                                        placeholder='example@gmail.com'
                                    />
                                </div>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                    <Input
                                        type='text'
                                        label='Company'
                                        placeholder='Louis Vuitton'
                                    />
                                    <Input
                                        type='text'
                                        label='Country'
                                        placeholder='USA'
                                    />
                                </div>
                                <Input
                                    type='textarea'
                                    label='How can we help?'
                                    placeholder='Tell us about your enterprises needs'
                                />
                                <button className='btn w-full md:w-max md:min-w-65'>
                                    <span>Get In Touch</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap flex-row xl:flex-col gap-4 w-full xl:max-w-93'>
                            {items.map((item, index) => (
                                <div
                                    className='w-full flex grow flex-col items-center justify-center gap-4 py-8 lg:py-10 md:h-full text-center border border-solid border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.00)_100%)] rounded-2xl md:rounded-3xl lg:rounded-4xl'
                                    key={index}>
                                    <div className='flex items-center justify-center'>
                                        {item.icon}
                                    </div>
                                    <h4 className='text-2xl'>{item.title}</h4>
                                    <p className='text-base text-[#B4B4B4]'>
                                        {item.des}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </div>

            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

