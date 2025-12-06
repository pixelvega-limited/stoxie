import Pricing from '../../pricing/pricing.jsx';
import CommonTitle from '../common-title';
import { Container } from '../grid';

export default function smarter() {
    return (
        <div className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[10%] -right-[10%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]'></div>
            <Container>
                <CommonTitle
                    className='mb-8 md:mb-12 lg:mb-16 text-center'
                    title={`<span class='font-extralight'>Unlock</span> Smarter Investing.`}
                    des={
                        'Start free, then pick the plan that fits your investing style.'
                    }
                />
                <Pricing />
            </Container>
        </div>
    );
}

