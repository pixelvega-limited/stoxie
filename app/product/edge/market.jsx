"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Image from 'next/image'
export default function market() {
  const never = [
    {
      title: '<span class="font-light">Stay ahead </span> of every market rotation.',
      des: 'Monitor shifts in key sectors and commodities. Know when energy outperforms tech, or when inflation drives market sentiment.',
      img: '/img/edge/img-1.png',
    }
  ]
  return (
    <div className='relative z-1'>
      <div className="size-140 rounded-full absolute top-[20%] -right-[50%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)] -z-1"></div>
      <motion.h3
        initial={{ y: y, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: duration, delay: 0 }}
        viewport={{ once: once, amount: 0.2, }}
        className='mb-8 md:mb-10 lg:mb-14 xl:mb-16'><span className='font-light'>Never Miss </span>A Market Move</motion.h3>
      {never.map((item, index) => (
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: `0.${index + 1}` }}
          viewport={{ once: once, amount: 0.2, }}
          className="md:flex bg-[#040406] border-2 border-solid border-white/12 rounded-2xl md:rounded-[20px] relative z-1 overflow-hidden" key={index}>
          <div className="md:w-1/2 pt-6 md:pt-10 xl:pt-20 pl-5 md:pl-8 lg:pl-16 xl:pl-20 md:pb-20  xl:pb-30">
            <h3 className='mb-4 max-w-120 capitalize' dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            <p className='text-lg  text-[#C7C9D1] font-euclid font-normal leading-normal mb-6 md:mb-8'>{item.des}</p>
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: 0 }}
              viewport={{ once: once, amount: 0.2, }}>
              <button className='btn btn-secondary'><span>Try Lens Free – 30 Days</span></button>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2, }}
            className='mt-6 md:mt-0 md:w-1/2'>
            <Image src={item.img} width={569} height={406} alt="" className='max-w-full h-full object-cover mx-auto' />
          </motion.div>
        </motion.div>
      ))
      }
    </div >
  )
}
