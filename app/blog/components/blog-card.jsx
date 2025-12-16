import { duration, once, y } from '@/app/lib/animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
                duration: duration,
                delay: `0.${index + 1}`,
            }}
            viewport={{ once: once, amount: 0.2 }}
            key={index}>
            <Link
                href={`/blog/${index * 1}`}
                className='block group overflow-hidden p-2 border border-solid border-white/10 bg-white/5 rounded-xl md:rounded-2xl'>
                <Image
                    src={item.img}
                    width={370}
                    height={210}
                    alt='blog image'
                    className='w-full h-auto mb-3 rounded-xl transition-all duration-300 group-hover:scale-110'
                />
                <div className='p-4'>
                    <span className='text-sm text-[#C7C9D1] font-euclid font-light leading-[120%] mb-2 block'>
                        {item.time}
                    </span>
                    <h4 className='text-xl text-white font-euclid font-extrabold leading-[120%] capitalize mb-2'>
                        {item.title}
                    </h4>
                    <p className='text-base text-[#C7C9D1] font-euclid font-normal leading-normal'>
                        {item.des}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};

export default BlogCard;

