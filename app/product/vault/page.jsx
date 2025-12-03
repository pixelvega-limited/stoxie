"use client"
import { Container } from '../../components/grid';
import CallToAction from '../../components/call-to-action'
import Banner from '../../components/banner';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { duration, once, y } from '../../lib/animation';
import Deep from '../vault/deep.jsx';
import Vault from '../vault/vault.jsx';



export default function page() {
  return (
        <>
      <Banner
        innerClass='max-w-200'
        subtitle="Vault - Fund & ETF Analysis."
        title="Instant Fund Performance Clarity."
        des="View fund growth, volatility, and expense ratios instantly. Get quick insights into which ETFs or mutual funds align with your portfolio goals."
      >
        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: duration, delay: 0.2 }}
          viewport={{ once: once, amount: 0.2, }}
          className="mt-12 md:mt-16 lg:mt-18 xl:mt-21">
          <Image src="/img/vault/banner-img.png" width={1000} height={1000} className='max-w-full mx-auto' alt="" />
        </motion.div>
      </Banner>
      <Container>
        <Deep />
        <Vault/>
      </Container>
      <CallToAction
        title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
        des={'Join thousands of investors using Stoxie to see the market differently.'}
        btnText='Try Vault Free — 30 Days.'
      />
    </>
  )
}
