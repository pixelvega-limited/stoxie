"use client"
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import CommonTitle from '../../components/common-title'
import Image from 'next/image'

export default function Analysis() {
  const Analysis = [
    {
      img: '/img/lens/1.svg',
      title: 'Fundamentals + Technicals',
      des: 'Get a complete picture with financial metrics, ratios, and technical indicators all in one place. ',
    },
    {
      img: '/img/lens/2.svg',
      title: 'Peer Comparisons',
      des: 'See how stocks stack up against competitors. ',
    },
    {
      img: '/img/lens/3.svg',
      title: 'ESG Insights',
      des: 'Understand environmental, social, and governance factors. Invest in companies that align with your values.',
    },
  ]
  return (
    <div className='common-padding relative z-1'>
      <div className="size-140 rounded-full absolute bottom-[10%] -right-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]"></div>
      <CommonTitle className="mb-8 md:mb-12 lg:mb-16" title={`<span class='font-light'>Powerful</span> Stock Analysis`} des={`Everything you need to analyze stocks like a professional`} />
      <div className=" border border-solid border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {Analysis.map((item, index) => (
          <motion.div
            initial={{ y: y, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: duration, delay: `0.${index + 1}` }}
            viewport={{ once: once, amount: 0.2, }}
            key={index} className="single-item">
            <div className="p-7.5">
              <motion.div
                initial={{ scale: .8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: duration, delay: 0 }}
                viewport={{ once: once, amount: 0.2, }}
                className="social-link rounded-full max-w-max mb-4">
                <Image src={item.img} width={60} height={60} alt="" className='p-4' />
              </motion.div>
              <h4 className='text-xl md:text-2xl text-white font-euclid font-semibold leading-[120%] mb-2'>{item.title}</h4>
              <p className='text-base text-[#C7C9D1] font-euclid font-light leading-[130%]'>{item.des}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
