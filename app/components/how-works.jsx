'use client';
import { steps } from '@/app/data/how-it-works';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CommonTitle from '@/components/common/common-title';
import { Container } from '@/components/grid';
import { duration, once, y } from '@/app/lib/animation';

const Icon = ({ icon }) => {
    return (
        <div className='w-20 h-20 flex items-center justify-center rounded-full border border-solid border-white/16 bg-white/10 backdrop-blur-[20px] mb-6 md:mb-8 xl:mb-12 '>
            {icon}
        </div>
    );
};

const Step = ({ step }) => {
    return (
        <div className='px-4 py-1 max-w-max flex items-center gap-10 min-h-8.5 mb-4 text-sm xl:text-base text-heading font-euclid font-normal leading-[110%] uppercase gradient-border  justify-center rounded-full border border-solid border-white/8  bg-white/10 backdrop-blur-[20px] shadow-xl '>
            Step {step}
        </div>
    );
};

export default function HowWorks() {
    return (
        <div className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute -bottom-[50%] -right-[10%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]'></div>
            <Container>
                <CommonTitle
                    className='text-center mb-8 md:mb-12 lg:mb-16'
                    title={`How <span class='font-extralight'>Stoxie</span> Works`}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {steps.map((item, index) => (
                        <motion.div
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: duration,
                                delay: `0.${index + 1}`,
                            }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={item.name}
                            className='relative p-6 xl:p-7.5 rounded-2xl bg-white/5 overflow-hidden'>
                            <Image
                                src={item.img}
                                width='369px'
                                height='356px'
                                unoptimized
                                quality={100}
                                alt={item.title}
                                className='absolute top-0 left-0 w-full h-full object-cover -z-10'
                            />
                            <Icon icon={item.icon} />
                            <Step step={index + 1} />
                            <h3 className='text-2xl text-heading font-euclid font-semibold leading-[110%] mb-2.5'>
                                {item.title}
                            </h3>
                            <p className='text-base text-para font-euclid font-normal leading-[140%] max-w-67'>
                                {item.des}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

