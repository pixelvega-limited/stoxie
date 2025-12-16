import AnimatedBannerImage from '@/components/common/animated-banner-image.jsx';
import Banner from '@/components/common/banner.jsx';
import CallToAction from '@/components/common/call-to-action.jsx';
import Features from './components/features.jsx';
import Investors from './components/investors.jsx';
import MeetTheMinds from './components/meet-the-minds.jsx';
import Values from './components/values.jsx';

export default function page() {
    return (
        <>
            <Banner
                innerClass='max-w-190'
                className='text-center'
                subtitle='About Us'
                title='Invest Smarter with Confidence.'
                des='Stoxie was built to put powerful, AI-driven investment intelligence directly into the hands of everyday investors.'
                is_btn_link='/pricing#compare-plans'
                is_btn_text='See Our Plans'
                is_btn={true}>
                <AnimatedBannerImage
                    image='/img/about/banner.png'
                    height={920}
                    width={1000}
                    alt='banner image'
                    className='max-w-full mx-auto'
                />
            </Banner>
            <Features />
            <Investors />
            <Values />
            <MeetTheMinds />
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Get Your Edge?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

