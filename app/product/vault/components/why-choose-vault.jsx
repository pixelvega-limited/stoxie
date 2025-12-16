'use client';
import { whyChooseVaultData } from '@/app/data/why-choose';
import { Verify } from '../../../lib/icons';
import ImageCard from '../../components/image-card';
export default function WhyChooseVault() {
    const list = [
        {
            icon: <Verify />,
            title: 'Access to thousands of funds and ETFs',
        },
        {
            icon: <Verify />,
            title: 'Expense ratio analysis',
        },
        {
            icon: <Verify />,
            title: 'Risk and volatility metrics',
        },
        {
            icon: <Verify />,
            title: 'Dividend and distribution tracking',
        },
        {
            icon: <Verify />,
            title: 'Manager information and tenure',
        },
        {
            icon: <Verify />,
            title: 'Tax efficiency analysis',
        },
    ];
    return (
        <div className='pb-10 md:pb-16 lg:pb-25 xl:pb-35 relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[10%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1'></div>
            <ImageCard
                list={whyChooseVaultData}
                imagePosition='right'
                image='/img/vault/img.png'
                btnLink='#'
                btnText='Try Vault Free – 30 Days'
                heading="<span className='font-light'>Why</span> Choose Vault?"
                subHeading='Stop guessing which funds to choose. Vault gives you professional-grade analysis tools to evaluate and compare funds with confidence.'
            />
        </div>
    );
}

