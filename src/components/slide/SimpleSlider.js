import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SimpleSlide(props) {
	return (
		<Swiper
			spaceBetween={30}
			slidesPerView={1}
			navigation={true}
			centeredSlides={true}
			autoplay={{
				delay: 4000,
				disableOnInteraction: false,
			}}
			pagination={{
				clickable: true,
			}}
			modules={[Navigation, Autoplay, Pagination]}
			loop={true}
		>
			{props.slides.map((item, index) => {
				return <SwiperSlide key={index}>
					<picture>
						<source media='(min-width: 720px)' srcSet={item.imageLg} style={{ width: '100%', height: '100%' }} />
						<img src={item.imageXs} alt='summer collection' style={{ width: '100%', height: '100%' }} />
					</picture>
				</SwiperSlide>
			})}
		</Swiper>
	);
};