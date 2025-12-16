import { footerLinks } from '@/app/data/navigations';
import Logo from '@/components/common/logo';
import Social from '@/components/common/social';
import { Container } from '@/components/grid';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='footer p-3 md:p-4 lg:p-5 pb-4 md:pb-6 lg:pb-8'>
            <div className='bg-white/6 border border-solid border-white/6 backdrop-blur-sm rounded-2xl md:rounded-[20px]'>
                <Container className='px-0!'>
                    <div className='flex flex-wrap justify-between lg:justify-start gap-y-6 gap-x-6 md:gap-x-8 lg:gap-x-14 xl:gap-x-30 py-6 md:py-10 px-4 md:px-6 lg:px-8 xl:px-0 xl:py-20'>
                        <div className='max-w-full w-full md:max-w-60 lg:max-w-80 flex flex-col gap-y-3 md:gap-y-4 lg:gap-y-5 lg:mr-auto'>
                            <Logo />
                            <p className='text-para'>
                                AI-powered insights for smarter investing.
                            </p>
                        </div>

                        {footerLinks.map((item, index) => (
                            <div className='flex flex-col gap-y-2' key={index}>
                                <h4 className='font-euclid font-bold'>
                                    {item.title}
                                </h4>
                                <div className='flex flex-col gap-y-2'>
                                    {item.lists.map((l, i) => (
                                        <Link
                                            href={l.path}
                                            key={i}
                                            className='block text-para hover:text-primary hover:translate-x-1'>
                                            {l.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='px-4 text-para md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 flex flex-wrap gap-4 items-center justify-center md:justify-between text-center md:text-start'>
                        <Social />
                        <p>
                            Not financial advice. @Stoxie. All rights reserved.
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    );
}

