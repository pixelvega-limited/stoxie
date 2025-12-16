'use client';

import { Solution, Support } from '@/app/lib/icons';
import Banner from '@/components/common/banner';
import CallToAction from '@/components/common/call-to-action';
import ConatctForm from './components/contact-form';

export default function page() {


    return (
        <>
            <Banner
                innerClass='max-w-203.5'
                className='text-center common-padding'
                subtitle='We’re Here to Help'
                title='Need assistance? Let’s connect.'
                des='Whether you have a question, need help with your account, or want to learn more about Stoxie, our team is here to help.'
                desClass='lg:max-w-200!'
                is_btn={false}></Banner>

            <ConatctForm />

            <CallToAction
                title={`<span class='font-light'>Ready to</span> Chat With Your AI Investing Co-Pilot?`}
                des={
                    'Join thousands of investors using Stoxie to see the market differently.'
                }
            />
        </>
    );
}

