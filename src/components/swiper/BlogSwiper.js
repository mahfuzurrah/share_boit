import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Blog_1 from "../../assets/img/blog_1.png";
import Blog_2 from "../../assets/img/blog_2.png";
import Blog_3 from "../../assets/img/blog_3.png";

export default function BlogSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mt-5"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <img src={Blog_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
