import SecondaryButton from '@/components/common/secondary-button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { duration, once, y } from '../../lib/animation';
const ImageCard = ({
    list,
    heading = "<span className='font-light'>Why</span> Choose Vault?",
    subHeading = 'Stop guessing which funds to choose. Vault gives you professional-grade analysis tools to evaluate and compare funds with confidence.',
    btnText = 'Try Lens Free – 30 Days',
    btnLink = '#',
    image = '/img/vault/img.png',
    imagePosition = 'right',
}) => {
    return (
        <div
            className={`${
                imagePosition === 'left' ? 'p-3 md:p-4' : 'pl-4 md:pl-10 xl:pl-16 p-4'
            } rounded-2xl border border-solid border-white/16 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 md:gap-8 mx-auto`}>
            {imagePosition === 'left' && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}>
                    <Image
                        src={image}
                        width={286}
                        height={53}
                        alt=''
                        className='w-full h-auto rounded-xl md:rounded-2xl'
                    />
                </motion.div>
            )}
            <div
                className={`${
                    imagePosition === 'left' ? 'pr-4 card-content' : 'card-content'
                }`}>
                <motion.h3
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='mb-2 md:mb-3'>
                    <div dangerouslySetInnerHTML={{ __html: heading }} />
                </motion.h3>
                <motion.p
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-4 md:mb-6 xl:mb-8'>
                    {subHeading}
                </motion.p>
                <ul className='mb-6 md:mb-8'>
                    {list.map((item, index) => (
                        <motion.li
                            initial={{ y: y, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: duration,
                                delay: `0.${index + 1}`,
                            }}
                            viewport={{ once: once, amount: 0.2 }}
                            key={index}
                            className='flex items-start gap-2.5 mb-2 md:mb-5'>
                            <div className='w-6 h-6'>{item.icon}</div>
                            <span className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal'>
                                {item.title}
                            </span>
                        </motion.li>
                    ))}
                </ul>
                <motion.div
                    initial={{ y: y, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}
                    className=' mb-4 md:mb-0'>
                    <SecondaryButton text={btnText} link={btnLink} />
                </motion.div>
            </div>
            {imagePosition === 'right' && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: duration, delay: 0 }}
                    viewport={{ once: once, amount: 0.2 }}>
                    <Image
                        src={image}
                        width={286}
                        height={53}
                        alt=''
                        className='w-full h-auto rounded-xl md:rounded-2xl'
                    />
                </motion.div>
            )}
        </div>
    );
};

export default ImageCard;

