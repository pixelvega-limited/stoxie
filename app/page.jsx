import Banner from '@/components/common/banner';
import HowWorks from './components/how-works';

import FooterCallToAction from '@/components/common/call-to-action';
import HeroCallToActions from './components/hero-call-to-action';
import HeroVideo from './components/hero-video';
import PowerfulTools from './components/powerful-tools';
import PlanAndPricing from './components/smarter';

export default function Page() {
    return (
        <>
            <Banner
                className='text-left'
                title='See the Market with Clarity.'
                des='Our AI transforms complex market data into simple insights so you can invest smarter, not harder.'
                desClass='max-w-full!'
                is_btn={false}>
                <HeroCallToActions />
                <HeroVideo />
            </Banner>
            <HowWorks />
            <PowerfulTools />
            <PlanAndPricing />
            <FooterCallToAction
                enableBg={false}
                title={`<span class="font-extralight">Ready to See</span> the Market Differently?`}
                des='Start your free 30-day trial and unlock smarter, AI-powered investing.'
            />
        </>
    );
}

