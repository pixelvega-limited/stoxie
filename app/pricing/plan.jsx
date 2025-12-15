'use client';
import PrimaryButton from '@/components/common/primary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CommonTitle from '../components/common-title';
import { Container } from '../components/grid';
import { planTable } from '../data/plans';
import { duration, once, y } from '../lib/animation';
import { Calender } from '../lib/icons';

export default function plan() {
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
        <div id="compare-plans" className='common-padding relative z-1'>
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
                        <table className='custom-table min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] w-full border border-solid'>
                            <thead>
                                <tr>
                                    <th className='border-b border-r last:border-r-0 border-solid border-white/16 w-20 text-base sm:text-lg md:text-xl lg:text-2xl text-left text-heading font-euclid font-light leading-[110%] py-4 px-4 sm:py-6 sm:px-6 md:py-10 md:px-8 lg:px-10 align-bottom'>
                                        Feature
                                    </th>
                                    <th className='border-b border-r last:border-r-0 border-solid border-white/16 text-nowrap text-left text-base sm:text-lg md:text-xl lg:text-2xl text-heading font-euclid font-light leading-[110%] uppercase py-4 px-4 sm:py-6 sm:px-6 md:py-10 md:px-8 align-bottom'>
                                        Preview (Free)
                                    </th>
                                    <th className='border-b border-r last:border-r-0 border-solid border-white/16 text-left text-base sm:text-lg md:text-xl lg:text-2xl text-heading font-euclid font-light leading-[110%] uppercase py-4 px-4 sm:py-6 sm:px-6 md:py-10 md:px-8 align-bottom'>
                                        Essentials
                                    </th>
                                    <th className='border-b border-r last:border-r-0 border-solid border-white/16 text-left text-base sm:text-lg md:text-xl lg:text-2xl text-heading font-euclid font-light leading-[110%] uppercase py-4 px-4 sm:py-6 sm:px-6 md:py-10 md:px-8 align-bottom'>
                                        Premium
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {planTable.map((item, index) => (
                                    <tr
                                        key={index}
                                        className='border border-solid border-white/16 border-x-0 first:border-t-0 last:border-b-0'>
                                        <td className='border-r last:border-r-0 border-white/16 py-3 px-4 sm:py-4 sm:px-6 md:px-8 w-25 text-xs sm:text-sm md:text-base lg:text-lg text-heading font-normal font-euclid leading-[110%]'>
                                            {item.feature}
                                        </td>
                                        <td className='border-r last:border-r-0 border-white/16 py-3 px-4 sm:py-4 sm:px-6 md:px-8 w-25 text-xs sm:text-sm md:text-base lg:text-lg text-heading font-normal font-euclid leading-[110%]'>
                                            <div className=''>
                                                {item.preview ? (
                                                    <p className=''>
                                                        {item.preview}
                                                    </p>
                                                ) : (
                                                    <div className='max-w-4 md:max-w-5'>
                                                        <svg
                                                            width='24'
                                                            height='24'
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-full h-auto'>
                                                            <rect
                                                                x='6'
                                                                y='6'
                                                                width='13'
                                                                height='11'
                                                                fill='white'
                                                            />
                                                            <path
                                                                d='M19.0742 4.92582C15.1724 1.02473 8.82694 1.02473 4.92511 4.92582C1.02496 8.82691 1.02496 15.1742 4.92511 19.0752C6.87603 21.0254 9.43805 22 12.0001 22C14.5622 22 17.1233 21.0253 19.0742 19.0752C22.9753 15.1742 22.9753 8.82691 19.0742 4.92582ZM16.1262 14.9482C16.4522 15.2742 16.4522 15.8011 16.1262 16.1271C15.9636 16.2897 15.7502 16.3714 15.5367 16.3714C15.3233 16.3714 15.1098 16.2897 14.9473 16.1271L12.0001 13.179L9.05369 16.1263C8.89029 16.2888 8.67683 16.3706 8.46423 16.3706C8.25081 16.3706 8.03735 16.2888 7.87478 16.1263C7.5488 15.8003 7.5488 15.2725 7.87478 14.9474L10.8212 12.0001L7.87395 9.05284C7.54798 8.72686 7.54798 8.1991 7.87395 7.87394C8.19911 7.54796 8.72685 7.54796 9.05283 7.87394L12 10.8212L14.9472 7.87394C15.2732 7.54796 15.8001 7.54796 16.1261 7.87394C16.4521 8.1991 16.4521 8.72686 16.1261 9.05284L13.1789 12.0001L16.1262 14.9482Z'
                                                                fill='#535354'
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className='border-r last:border-r-0 border-white/16 py-3 px-4 sm:py-4 sm:px-6 md:px-8 w-25 text-xs sm:text-sm md:text-base lg:text-lg text-heading font-normal font-euclid leading-[110%]'>
                                            <div className=''>
                                                {item.essentials ? (
                                                    <p className=''>
                                                        {item.essentials}
                                                    </p>
                                                ) : (
                                                    <div className='max-w-4 md:max-w-5'>
                                                        <svg
                                                            width='24'
                                                            height='24'
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-full h-auto'>
                                                            <rect
                                                                x='6'
                                                                y='6'
                                                                width='13'
                                                                height='11'
                                                                fill='white'
                                                            />
                                                            <path
                                                                d='M19.0742 4.92582C15.1724 1.02473 8.82694 1.02473 4.92511 4.92582C1.02496 8.82691 1.02496 15.1742 4.92511 19.0752C6.87603 21.0254 9.43805 22 12.0001 22C14.5622 22 17.1233 21.0253 19.0742 19.0752C22.9753 15.1742 22.9753 8.82691 19.0742 4.92582ZM16.1262 14.9482C16.4522 15.2742 16.4522 15.8011 16.1262 16.1271C15.9636 16.2897 15.7502 16.3714 15.5367 16.3714C15.3233 16.3714 15.1098 16.2897 14.9473 16.1271L12.0001 13.179L9.05369 16.1263C8.89029 16.2888 8.67683 16.3706 8.46423 16.3706C8.25081 16.3706 8.03735 16.2888 7.87478 16.1263C7.5488 15.8003 7.5488 15.2725 7.87478 14.9474L10.8212 12.0001L7.87395 9.05284C7.54798 8.72686 7.54798 8.1991 7.87395 7.87394C8.19911 7.54796 8.72685 7.54796 9.05283 7.87394L12 10.8212L14.9472 7.87394C15.2732 7.54796 15.8001 7.54796 16.1261 7.87394C16.4521 8.1991 16.4521 8.72686 16.1261 9.05284L13.1789 12.0001L16.1262 14.9482Z'
                                                                fill='#535354'
                                                            />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className='border-r last:border-r-0 border-white/16 py-3 px-4 sm:py-4 sm:px-6 md:px-8 w-25 text-xs sm:text-sm md:text-base lg:text-lg text-heading font-normal font-euclid leading-[110%]'>
                                            <div className=''>
                                                {item.premium ? (
                                                    <p className=''>
                                                        {item.premium}
                                                    </p>
                                                ) : (
                                                    <p className='max-w-4 md:max-w-5'>
                                                        <svg
                                                            width='24'
                                                            height='24'
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                            className='w-full h-auto'>
                                                            <rect
                                                                x='6'
                                                                y='6'
                                                                width='13'
                                                                height='11'
                                                                fill='white'
                                                            />
                                                            <path
                                                                d='M19.0742 4.92582C15.1724 1.02473 8.82694 1.02473 4.92511 4.92582C1.02496 8.82691 1.02496 15.1742 4.92511 19.0752C6.87603 21.0254 9.43805 22 12.0001 22C14.5622 22 17.1233 21.0253 19.0742 19.0752C22.9753 15.1742 22.9753 8.82691 19.0742 4.92582ZM16.1262 14.9482C16.4522 15.2742 16.4522 15.8011 16.1262 16.1271C15.9636 16.2897 15.7502 16.3714 15.5367 16.3714C15.3233 16.3714 15.1098 16.2897 14.9473 16.1271L12.0001 13.179L9.05369 16.1263C8.89029 16.2888 8.67683 16.3706 8.46423 16.3706C8.25081 16.3706 8.03735 16.2888 7.87478 16.1263C7.5488 15.8003 7.5488 15.2725 7.87478 14.9474L10.8212 12.0001L7.87395 9.05284C7.54798 8.72686 7.54798 8.1991 7.87395 7.87394C8.19911 7.54796 8.72685 7.54796 9.05283 7.87394L12 10.8212L14.9472 7.87394C15.2732 7.54796 15.8001 7.54796 16.1261 7.87394C16.4521 8.1991 16.4521 8.72686 16.1261 9.05284L13.1789 12.0001L16.1262 14.9482Z'
                                                                fill='#535354'
                                                            />
                                                        </svg>
                                                    </p>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

