import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ThumbsSlider(props) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='mb-5'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={30}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Thumbs, Navigation]}
            >
                {props.slides.map((item, index) => {
                    return <SwiperSlide key={index} className='my-auto'>
                        <picture>
                            <img src={item} alt='collection' style={{ width: '100%', height: '100%' }} />
                        </picture>
                    </SwiperSlide>
                })}
            </Swiper>
            <Swiper
                className='mt-3'
                onSwiper={setThumbsSwiper}
                spaceBetween={50}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
            >
                {props.slides.map((item, index) => {
                    return <SwiperSlide key={index}>
                        <div style={{ height: '100px', width: '100px', borderRadius: '0.75rem', overflow: 'hidden' }} role='button'>
                            <img src={item} alt='summer collection' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    );
};