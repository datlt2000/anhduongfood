'use client'
import React, { useState } from 'react';
import { CarouselItem, Carousel } from 'react-bootstrap';

export default function ThumbsSlider(props) {
    const [index, setIndex] = useState(0);
    return (
        <div className='mb-5'>
            <Carousel activeIndex={index} onSelect={setIndex} indicators={false}>
                {props.slides.map((item, index) => {
                    return <CarouselItem key={index} className='my-auto' >
                        <img src={item} alt='collection' className='w-100 h-100' style={{ maxHeight: '500px', objectFit: "cover", objectPosition: "center" }} />
                    </CarouselItem>
                })}
            </Carousel>
            <div className='d-flex '>
                {props.slides.map((item, idx) => {
                    return <div key={idx}
                        style={{ height: '100px', width: '100px', borderRadius: '0.75rem', overflow: 'hidden' }}
                        className='mt-3 me-2'
                        role='button' onClick={() => setIndex(idx)}>
                        <img src={item} alt='summer collection' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                    </div>
                })}
            </div>
        </div>
    );
};