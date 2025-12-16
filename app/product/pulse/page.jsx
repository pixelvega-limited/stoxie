'use client';

import AnimatedBannerImage from '@/components/common/animated-banner-image';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import { Container } from '@/components/grid';

import InvestImageCards from './components/invest-image-cards';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-208'
                subtitle='Pulse - Trends & Themes Tool'
                title='Invest in What’s Shaping The Future.'
                des='Explore AI, EVs, renewables, and emerging tech themes curated by Stoxie’s AI. Pulse helps you turn trends into actionable investment ideas.'>
                <AnimatedBannerImage
                    image='/img/pulse/banner-img.png'
                    width={1000}
                    height={920}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-21'
                    alt='banner image'
                />
            </Banner>
            <div className='common-padding'>
                <Container>
                    <InvestImageCards />
                </Container>
            </div>
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Master Fund Investing?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days.'
            />
        </>
    );
}

