'use client';
import { analysis_lens } from '@/app/data/analysis';
import CommonTitle from '@/components/common/common-title';
import IconCard from '../../components/icon-card';

export default function Analysis() {
    return (
        <div className='common-padding relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[10%] -right-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(252,193,113,0.30)_0%,rgba(193,124,86,0.30)_100%)]'></div>
            <CommonTitle
                className='mb-8 md:mb-12 lg:mb-16'
                title={`<span class='font-light'>Powerful</span> Stock Analysis`}
                des={`Everything you need to analyze stocks like a professional`}
            />
            <div className=' border border-solid border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
                {analysis_lens.map((item, index) => (
                    <IconCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}

