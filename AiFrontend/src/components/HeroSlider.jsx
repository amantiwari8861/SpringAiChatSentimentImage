// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (1).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (3).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (4).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (5).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (6).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (7).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
        <SwiperSlide className="min-h-52 text-center bg-amber-200">
          <img src="img/slide (8).jpg" alt="" className="w-full h-[400px]" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
