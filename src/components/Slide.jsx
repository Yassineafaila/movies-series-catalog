import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "./Slide.scss"
import MovieDetails from "./MovieDetails";
function Slide({ movies }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay:4000,
        disableOnInteraction:false
      }}
      modules={[Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {movies.map((movie, index) => {
        return (
          
            <SwiperSlide key={index}><MovieDetails movie={movie}/></SwiperSlide>
        
        );
      })}
    </Swiper>
  );
}

export default Slide;
