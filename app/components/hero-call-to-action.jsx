'use client';

import { duration, once, y } from '@/app/lib/animation';
import { motion } from 'framer-motion';

import PrimaryButton from '@/components/common/primary-button';
import SecondaryButton from '@/components/common/secondary-button';

const HeroCallToActions = () => {
    return (
        <div className='flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6 lg:mt-8'>
            <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0.4 }}
                viewport={{ once: once, amount: 0.2 }}>
                <PrimaryButton
                    text='Start Free Trial - 30 Days Free'
                    LinkTo='#'
                    type='link'
                    className='md:min-w-[310px] justify-center'
                />
            </motion.div>
            <motion.div
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0.6 }}
                viewport={{ once: once, amount: 0.2 }}>
                <SecondaryButton
                    text='Compare Plans'
                    LinkTo='/pricing#compare-plans'
                    type='link'
                    className='justify-center'
                />
            </motion.div>
        </div>
    );
};

export default HeroCallToActions;

