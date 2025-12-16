import CommonTitle from '@/components/common/common-title';
import { Container } from '@/components/grid';
import AnimatedFeaturedImage from './animated-featured-image';
import CountData from './count-data';
export default function Investors() {
    return (
        <div>
            <Container>
                <CommonTitle
                    className='text-center mb-8 md:mb-10 lg:mb-12 xl:mb-16'
                    title={`<span class='font-light'>Built by</span> Investors, For Investors.`}
                    des={`Our team comes from diverse backgrounds finance, AI research, and data science united by one goal: to make professional-grade investing tools accessible to everyone. We believe in transparency, education, and empowering investors through data-driven clarity.`}
                />
                <CountData />
                <AnimatedFeaturedImage
                    image='/img/about/fearures-img.png'
                    height={600}
                    width={1920}
                    alt='features image'
                    className='max-w-full mx-auto'
                />
            </Container>
        </div>
    );
}

