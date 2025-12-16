'use client';
import { whyChooseLensData } from '@/app/data/why-choose';
import ImageCard from '../../components/image-card';

export default function WhyChooseLens() {
    return (
        <div className='pb-10 md:pb-16 lg:pb-25 xl:pb-35 relative z-1'>
            <div className='size-140 rounded-full absolute bottom-[10%] -left-[55%] blur-[400px] bg-[linear-gradient(180deg,rgba(214,255,201,0.30)_0%,rgba(174,255,147,0.30)_100%)] -z-1'></div>
            <ImageCard
                list={whyChooseLensData}
                heading="<span className='font-light'>Why</span> Choose Lens?"
                subHeading='Cut through the noise and focus on what matters. Lens brings together all the critical data points you need to make informed investment decisions.'
                btnText='Try Lens Free – 30 Days'
                btnLink='/product/lens'
                image='/img/lens/img.png'
                imagePosition='left'
            />
        </div>
    );
}

