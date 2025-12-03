"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Image from 'next/image'
export default function validate() {
  const peak = [
    {
      title: "<span class='font-light'>Validate your </span> instincts with AI.",
      des: 'Each theme comes with in-depth analytics: price history, volatility index, and related companies. Make decisions based on proof, not emotion.',
      img: '/img/pulse/img-2.png',
    }
  ]
  return (
    <div className='relative z-1'>
      <div className="size-140 rounded-full absolute bottom-0 -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1"></div>
      {peak.map((item, index) => (
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: `0.${index + 1}` }}
          viewport={{ once: once, amount: 0.2, }}
          key={index} className='md:flex md:items-center md:gap-x-8 lg:gap-x-10 xl:gap-x-12'>
          <div className='md:w-1/2'>
            <h3 className='mb-4 max-w-110' dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            <p className='text-base md:text-lg text-[#C7C9D1] font-euclid font-normal leading-normal mb-6 md:mb-8 max-w-130'>{item.des}</p>
            <button className='btn btn-secondary'><span>Try Lens Free – 30 Days</span></button>
          </div>
          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2, }}
            className='mt-6 md:mt-0 md:w-1/2'>
            <Image src={item.img} width={569} height={406} alt="" className='max-w-full mx-auto rounded-xl md:rounded-2xl' />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
