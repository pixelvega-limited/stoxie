import PrimaryButton from '@/components/common/primary-button';
import Image from 'next/image';
import Footer from '../layout/footer';
import CommonTitle from './common-title';
import { Container } from './grid';

export default function FooterCallToAction({
    title,
    des,
    btnText = 'Start Free Trial - 30 Days',
    enableBg = true,
}) {
    return (
        <div className='relative overflow-hidden z-1'>
            <div className='blur-[60px] absolute -mt-16 rotate-41 left-1/2 -translate-x-1/2 w-50 h-41 bg-[radial-gradient(54.3%_54.45%_at_46.68%_45.8%,#939FD7_0%,rgba(69,74,111,0.50)_46.81%,rgba(69,74,111,0.00)_100%)]'></div>
            <div className='common-padding pb-12 md:pb-16 lg:pb-20 xl:pb-25'>
                {enableBg && (
                    <div className='absolute top-0 left-0 w-full h-full -z-10 pointer-events-none'>
                        <Image
                            src='/img/cta-bg.png'
                            alt=''
                            className='size-full'
                            width={2400}
                            height={1100}
                            unoptimized
                            quality={100}
                        />
                    </div>
                )}
                <Container>
                    <CommonTitle
                        className='text-center max-w-175 mx-auto'
                        title={title}
                        des={des}
                        desClass='max-w-125'>
                        <PrimaryButton text={btnText} type='link' href='#' />
                    </CommonTitle>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

