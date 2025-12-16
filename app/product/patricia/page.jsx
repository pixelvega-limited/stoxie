'use client';

import AnimatedBannerImage from '@/components/common/animated-banner-image.jsx';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import { Container } from '@/components/grid';
import AskQuestions from './components/ask-questions';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-264'
                subtitle='Patricia - AI Investing Co-Pilot'
                title='Your AI Financial Analyst.'
                des='Ask anything from stock comparisons to risk breakdowns and get real-time insights in natural language. Patricia delivers answers with data, not guesswork.'>
                <AnimatedBannerImage
                    image='/img/patricia/banner-img.png'
                    width={1000}
                    height={920}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-26'
                    alt='banner image'
                />
            </Banner>
            <Container>
                <AskQuestions />
            </Container>
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days.'
            />
        </>
    );
}

