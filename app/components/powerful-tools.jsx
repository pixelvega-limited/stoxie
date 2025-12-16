'use client';
import { powerData } from '@/app/data/powerfull-tools';
import PrimaryButton from '@/components/common/primary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CommonTitle from '@/components/common/common-title.jsx';
import { Container } from '@/components/grid/index.jsx';
import { duration, once, y } from '@/app/lib/animation.jsx';
import { ArrowRight } from '@/app/lib/icons.jsx';

export default function PowerfulTools() {
    return (
        <div className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[17%] -left-[10%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] z-1'></div>
            <Container>
                <CommonTitle
                    className='mb-8 md:mb-12 lg:mb-16 flex flex-wrap md:flex-nowrap justify-between'
                    title={`<span class='font-extralight'>Explore Our</span> <br/>Five Powerful Tools`}>
                    <PrimaryButton text='Try for Free' type='link' href='#' />
                </CommonTitle>
                <div className='flex flex-wrap items-center gap-4'>
                    {powerData.map((item, index) => (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: duration,
                                delay: `0.${index + 1}`,
                            }}
                            viewport={{ once: once, amount: 0.8 }}
                            key={index}
                            className={`w-full p-4 rounded-2xl bg-white/2 border border-solid border-white/12 overflow-hidden relative  z-1 ${
                                index === 2
                                    ? 'md:flex items-start justify-between'
                                    : 'max-w-91 lg:max-w-117 xl:max-w-138'
                            }`}>
                            <div className='text p-0 md:p-4'>
                                <h3 className='text-2xl md:text-3xl text-heading font-euclid font-semibold leading-[110%] mb-2.5'>
                                    {item.title}
                                </h3>
                                <p
                                    className={`text-base text-para font-euclid font-normal leading-[110%] mb-3 md:mb-5 ${
                                        index === 0
                                            ? 'max-w-91'
                                            : index === 1
                                            ? 'max-w-86'
                                            : index === 2
                                            ? 'max-w-103'
                                            : index === 3
                                            ? 'max-w-84'
                                            : 'max-w-107'
                                    }`}>
                                    {item.des}
                                </p>
                                <Link
                                    href={item.link}
                                    className='text-sm xl:text-base text-white font-euclid font-normal leading-[140%] flex items-center gap-2 hover:text-primary cursor-pointer mb-3 md:mb-5'>
                                    Learn More
                                    <ArrowRight className='rotate-0 size-4' />
                                </Link>
                            </div>
                            <div className=''>
                                <Image
                                    src={item.img}
                                    width='532px'
                                    height='300px'
                                    unoptimized
                                    quality={100}
                                    alt={item.title}
                                    className={`w-full h-auto rounded-xl object-cover ${
                                        index === 2
                                            ? 'min-h-54 md:min-h-63 lg:min-h-86'
                                            : 'min-h-auto'
                                    }`}
                                />
                            </div>
                            <Image
                                src={item.img2}
                                alt={item.title}
                                unoptimized
                                quality={100}
                                className={`w-full h-full object-bottom block pointer-events-none absolute top-0 left-0 -z-1 ${
                                    index === 2 ? 'max-w-141' : ''
                                }`}
                            />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

