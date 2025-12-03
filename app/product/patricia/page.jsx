"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import CallToAction from '../../components/call-to-action'
import Banner from '../../components/banner';
import Harder from '../patricia/harder.jsx';
import { Container } from '../../components/grid';


export default function page() {
  return (
    <>
      <Banner
        innerClass='max-w-264'
        subtitle="Patricia - AI Investing Co-Pilot"
        title="Your AI Financial Analyst."
        des="Ask anything from stock comparisons to risk breakdowns and get real-time insights in natural language. Patricia delivers answers with data, not guesswork."
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-12 md:mt-16 lg:mt-18 xl:mt-26">
          <Image src="/img/patricia/banner-img.png" width={1000} height={920} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <Container>
        <Harder/>
      </Container>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
        btnText='Try Edge Free — 30 Days.'
      />
    </>
  )
}
