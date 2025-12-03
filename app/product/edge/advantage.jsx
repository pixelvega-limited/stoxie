"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Image from 'next/image'
import { Verify } from '../../lib/icons'

export default function advantage() {
  const never = [
    {
      title: '<span class="font-light">Your </span> advantage in real time.',
      list: [
        "Instant AI alerts",
        "Custom sector tracking",
        "Filter signals by volatility",
      ],
      img: '/img/edge/img-2.png',
    }
  ]
  return (
    <div className='pt-5 md:pt-7.5 relative z-1'>
      <div className="size-140 rounded-full absolute bottom-[10%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1"></div>
      {never.map((item, index) => (
        <motion.div
          initial={{ y: y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: duration, delay: `0.${index + 1}` }}
          viewport={{ once: once, amount: 0.2, }}
          className="p-4 md:flex bg-[#040406] border-2 border-solid border-white/12 rounded-2xl md:rounded-[20px] relative z-1" key={index}>
          <motion.div
            initial={{ scale: .8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: duration, delay: 0 }}
            viewport={{ once: once, amount: 0.2, }}
            className='md:w-1/2'>
            <Image src={item.img} width={569} height={406} alt="" className='max-w-full object-cover mx-auto rounded-lg md:rounded-2xl' />
          </motion.div>
          <div className="md:w-1/2 pt-6 md:pt-10 lg:pt-16 xl:pt-20 pl-5 md:pl-10 lg:pl-16 xl:pl-20">
            <h3 className='mb-4 max-w-96 capitalize' dangerouslySetInnerHTML={{ __html: item.title }}></h3>
            {item.list.map((point, index) => (
              <motion.ul
                initial={{ y: y, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: duration, delay: `0.${index + 1}` }}
                viewport={{ once: once, amount: 0.2, }}
                className='mb-3' key={index}>
                <li className='flex items-center gap-2.5 '>
                  <Verify />
                  <p className='text-lg  text-[#C7C9D1] font-euclid font-normal leading-normal'>{point}</p>
                </li>
              </motion.ul>
            ))}
            <motion.div
              initial={{ y: y, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: duration, delay: `0.${index + 1}` }}
              viewport={{ once: once, amount: 0.2, }}
            >
              <button className='btn btn-secondary mt-4 md:mt-6 xl:mt-7.5 mb-4 md:mb-0'><span>Try Lens Free – 30 Days</span></button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
