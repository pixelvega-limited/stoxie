'use client';

import AnimatedBannerImage from '@/components/common/animated-banner-image';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import { Container } from '@/components/grid';
import Advantage from './components/advantage';
import Market from './components/market';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-230'
                subtitle='Edge - Premium Alerts Tool'
                title='Be First to Know When Markets Move.'
                des='Receive real-time alerts for earnings, price spikes, and volatility changes. Edge’s algorithm filters the noise - delivering only what matters.'>
                <AnimatedBannerImage
                    image='/img/edge/banner-img.png'
                    width={1000}
                    height={920}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-21'
                    alt='banner image'
                />
            </Banner>
            <Container>
                <div className='common-padding'>
                    <Market />
                    <Advantage />
                </div>
            </Container>
            <CallToAction
                title={`<span class='font-extralight'>Don't</span> Miss Your Next Signal.`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days.'
            />
        </>
    );
}

