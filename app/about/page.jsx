"use client"

import React from 'react'
import CallToAction from '../components/call-to-action'
import Banner from '../components/banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../lib/animation';
import Features from './features.jsx';
import Investors from './investors.jsx';
import Values from './values.jsx';
import Meet from './meet.jsx';

export default function page() {
  return (
    <>
      <Banner
        innerClass='max-w-190'
        subtitle="About Us"
        title="Invest Smarter with Confidence."
        des="Stoxie was built to put powerful, AI-driven investment intelligence directly into the hands of everyday investors."
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-10 md:mt-16 lg:mt-18 xl:mt-21">
          <Image src="/img/about/banner.png" width={1000} height={920} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <Features />
      <Investors />
      <Values/>
      <Meet/>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
      />
    </>
  )
}
