import { compareFeatures } from '@/app/data/features';
import CommonTitle from '@/components/common/common-title';
import { Container } from '@/components/grid';
import CompareCard from './compare-card';

export default function features() {
    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle
                    className='max-w-127 mb-8 md:mb-10 lg:mb-12 xl:mb-16'
                    title={`<span class='font-light'>Compare</span> All Plan Features`}
                />
                <div className=''>
                    {compareFeatures.map((item, index) => (
                        <CompareCard key={index} item={item} index={index} />
                    ))}
                </div>
            </Container>
        </div>
    );
}

