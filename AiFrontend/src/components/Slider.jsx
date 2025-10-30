import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
    return (
        <Swiper
        className='mb-2'
            // install Swiper modules
            modules={[Navigation, Pagination, A11y,Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src='img/slide (1).jpg' className='h-[350px] w-full' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='img/slide (2).jpg' className='h-[350px] w-full' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='img/slide (3).jpg' className='h-[350px] w-full' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='img/slide (4).jpg' className='h-[350px] w-full' alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src='img/slide (5).jpg' className='h-[350px] w-full' alt=""/>
            </SwiperSlide>
        </Swiper>
    );
};