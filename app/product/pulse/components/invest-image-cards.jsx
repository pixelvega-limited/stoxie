import { pulsePeak } from '@/app/data/pulse-peak';
import { duration, once, y } from '@/app/lib/animation';
import { motion } from 'framer-motion';
import ImageCard from './image-card';
const InvestImageCards = () => {
    return (
        <div className='relative z-1'>
            <div className='size-140 rounded-full absolute top-0 -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1'></div>
            <motion.h3
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2 }}
                className='mb-5 md:mb-10 lg:mb-14 xl:mb-16'>
                <span className='font-light'>Invest in </span> The Trends That
                Matter
            </motion.h3>
            {pulsePeak.map((item, index) => (
                <ImageCard key={index} item={item} index={index} />
            ))}
        </div>
    );
};

export default InvestImageCards;

