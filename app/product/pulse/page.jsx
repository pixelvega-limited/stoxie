"use client"

import React from 'react'
import CallToAction from '../../components/call-to-action'
import Banner from '../../components/banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import { Container } from '../../components/grid';
import Trends from './trends';
import Validate from './validate';


export default function page() {
  return (
    <>
      <Banner
        innerClass='max-w-208'
        subtitle="Pulse - Trends & Themes Tool"
        title="Invest in What’s Shaping The Future."
        des="Explore AI, EVs, renewables, and emerging tech themes curated by Stoxie’s AI. Pulse helps you turn trends into actionable investment ideas."
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-12 md:mt-16 lg:mt-18 xl:mt-21">
          <Image src="/img/pulse/banner-img.png" width={1000} height={920} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <div className="common-padding">
        <Container>
          <Trends />
          <Validate />
        </Container>
      </div>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
        btnText='Try Pulse Free — 30 Days.'
      />
    </>
  )
}
