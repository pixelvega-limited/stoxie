"use client"

import React from 'react'
import CallToAction from '../../components/call-to-action'
import Banner from '../../components/banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import { Container } from '../../components/grid';
import Market from './market';
import Advantage from './advantage';


export default function page() {
  return (
    <>
      <Banner
        innerClass='max-w-230'
        subtitle="Edge - Premium Alerts Tool"
        title="Be First to Know When Markets Move."
        des="Receive real-time alerts for earnings, price spikes, and volatility changes. Edge’s algorithm filters the noise - delivering only what matters."
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-12 md:mt-16 lg:mt-18 xl:mt-21">
          <Image src="/img/edge/banner-img.png" width={1000} height={920} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <Container>
        <div className="common-padding">
          <Market />
          <Advantage />
        </div>
      </Container>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
        btnText='Try Edge Free — 30 Days.'
      />
    </>
  )
}
