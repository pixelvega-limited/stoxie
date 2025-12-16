import AnimatedBannerImage from '@/components/common/animated-banner-image';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import { Container } from '@/components/grid';
import DeepFund from './components/deep-fund';
import WhyChooseVault from './components/why-choose-vault';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-200'
                subtitle='Vault - Fund / ETF Tool'
                title='Instant Fund Performance Clarity.'
                des='View fund growth, volatility, and expense ratios instantly. Get quick insights into which ETFs or mutual funds align with your portfolio goals.'>
                <AnimatedBannerImage
                    image='/img/vault/banner-img.png'
                    width={1000}
                    height={1000}
                    className='mt-12 md:mt-16 lg:mt-18 xl:mt-21'
                    alt='banner image'
                />
            </Banner>
            <Container>
                <DeepFund />
                <WhyChooseVault />
            </Container>
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

