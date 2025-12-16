'use client';
import { duration, once, y } from '@/app/lib/animation';
import PrimaryButton from '@/components/common/primary-button';
import Input from '@/components/ui/input';
import { motion } from 'framer-motion';

const Subscription = () => {
    return (
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
            <PrimaryButton
                className='w-full md:w-max mt-3 md:mt-px md:absolute top-1/2 md:-translate-y-1/2 md:right-2'
                text='Subscribe for Updates'
            />
        </motion.div>
    );
};

export default Subscription;

