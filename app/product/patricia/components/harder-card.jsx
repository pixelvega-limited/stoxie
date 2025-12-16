import { duration, once, y } from '@/app/lib/animation';
import SecondaryButton from '@/components/common/secondary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
const HarderCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: duration,
                delay: `0.${index + 1}`,
            }}
            viewport={{ once: once, amount: 0.2 }}
            className='card bg-background border border-solid border-white/12 rounded-2xl p-4 mb-6 md:mb-8'>
            <div
                className={`w-full py-4 md:p-5 lg:p-8.5 mb-6 md:mb-8 xl:mb-10 ${
                    index === 0 ? 'max-w-178' : 'max-w-220'
                }`}>
                <h3
                    className='mb-2'
                    dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-6 md:mb-8'>
                    {item.des}
                </p>
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}>
                    <SecondaryButton text={item.name} type='link' href='#' />
                </motion.div>
            </div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='w-full '>
                <Image
                    src={item.img}
                    width={922}
                    height={453}
                    alt=''
                    className='w-full h-auto rounded-lg md:rounded-xl lg:rounded-2xl'
                />
            </motion.div>
        </motion.div>
    );
};

export default HarderCard;

