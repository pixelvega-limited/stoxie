import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import Recent from './components/recent';
import Subscription from './components/subscription';

export default function page() {
    return (
        <>
            <Banner
                bannerHeight='lg:h-[calc(100vh-8rem)]'
                className='common-padding text-center'
                subtitle='Insights & Education'
                title='Learn. Grow. Invest Smarter.'
                des='Explore practical guides, market analysis, and AI-driven insights to help you make better investing decisions.'
                desClass='lg:max-w-200!'
                is_btn={false}>
                <Subscription />
            </Banner>
            <Recent />
            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

