import AnimatedBannerImage from '@/components/common/animated-banner-image';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import { Container } from '@/components/grid';
import Analysis from './components/analysis';
import WhyChooseLens from './components/why-choose-lens';

export default function page() {
    return (
        <>
            <Banner
                innerClass=''
                titleClass='max-w-200 mx-auto'
                subtitle='Lens - Stock Analysis Tool'
                subtitleClass=''
                title='Analyze Every Angle of a Stock.'
                des='Get both fundamental and technical data in one clean, AI-enhanced dashboard. '>
                <AnimatedBannerImage
                    image='/img/lens/banner-img.png'
                    width={1000}
                    height={1000}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-11'
                    alt='banner image'
                />
            </Banner>
            <Container>
                <Analysis />
                <WhyChooseLens />
            </Container>
            <CallToAction
                title={`<span class='font-extralight'>Ready to</span> See Stocks More Clearly?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
                btnText='Start Free Trial — 30 Days'
            />
        </>
    );
}

