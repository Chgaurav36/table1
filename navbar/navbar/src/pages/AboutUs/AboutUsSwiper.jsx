import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./AboutUsCSS/swiper.css";

// import required modules
import { Autoplay } from "swiper/modules";

import AboutUsCard from "./AboutUsCard";

const AboutUsSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        style={{
          width: "100%",
          height: "100%", // Default height
          minHeight: "300px", // Set a min height for all views
          "@media (maxWidth: 600px)": {
            height: "800px", // Increase height for mobile view
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutUsSwiper;
