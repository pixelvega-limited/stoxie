import { motion } from 'framer-motion';
import Image from 'next/image';
import { duration, once, y } from '../../lib/animation';
const IconCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: duration,
                delay: `0.${index + 1}`,
            }}
            viewport={{ once: once, amount: 0.2 }}
            key={index}
            className={`single-item ${
                index === 1 ? 'gradient-border-highlight' : ''
            }`}>
            <div className='p-7.5'>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='gradient-border rounded-full max-w-max mb-4'>
                    <Image
                        src={item.img}
                        width={60}
                        height={60}
                        alt='lens image'
                        className='p-4 '
                    />
                </motion.div>
                <h4 className='text-xl md:text-2xl text-white font-euclid font-semibold leading-[120%] mb-2'>
                    {item.title}
                </h4>
                <p className='text-base text-[#C7C9D1] font-euclid font-light leading-[130%]'>
                    {item.des}
                </p>
            </div>
        </motion.div>
    );
};

export default IconCard;

