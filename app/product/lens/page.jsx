"use client"

import React from 'react'
import CallToAction from '../../components/call-to-action'
import Banner from '../../components/banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Analysis from '../lens/analysis.jsx';
import { Container } from '../../components/grid';
import Choose from '../lens/choose.jsx';


export default function page() {
  return (
    <>
      <Banner
        innerClass=''
        titleClass='max-w-200 mx-auto'
        subtitle="Lens - Stock Analysis Tool"
        subtitleClass=''
        title="Analyze Every Angle of a Stock."
        des="Get both fundamental and technical data in one clean, AI-enhanced dashboard. "
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-12 md:mt-16 lg:mt-18 xl:mt-11">
          <Image src="/img/lens/banner-img.png" width={1000} height={1000} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <Container>
        <Analysis />
        <Choose />
      </Container>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
        btnText="Try Lens Free — 30 Days"
      />
    </>
  )
}
