'use client';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import ComparePlans from './components/compare-plans.jsx';
import OurPricing from './components/our-pricing.jsx';

export default function page() {
    return (
        <>
            <Banner
                bannerHeight='h-[calc(100vh+140px)]'
                innerClass='max-w-173'
                subtitle='Pricing Plans'
                title='Choose Your Plan.'
                des='Start free, then pick the plan that fits your investing style.'
                className='text-center '
                is_btn_text='Start Free Trial - 30 Days Free'></Banner>

            <OurPricing />
            <ComparePlans />
            <CallToAction
                title={`<span class='font-extralight'>Ready to</span> Get Your Edge?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

