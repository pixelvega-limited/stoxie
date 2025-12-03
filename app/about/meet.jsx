import React from 'react'
import { Container } from '../components/grid'
import CommonTitle from '../components/common-title'
import Slider from '../components/about-slider'

export default function meet() {
    return (
        <div className='common-padding'>
            <Container>
                <CommonTitle className='text-center mb-8 md:mb-10 lg:mb-12 xl:mb-16' title={`<span class='font-light'>Meet the</span> Minds Behind Stoxie.`} desClass='max-w-177 mx-auto' des={`Our multidisciplinary team blends finance expertise with AI innovation to create the future of investing.`} />
                <Slider />
            </Container>
        </div>
    )
}
