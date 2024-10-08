// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import acImg from "../../assets/images/home/ac.png";
import audiImg from "../../assets/images/home/audi.png";
import jaguarImg from "../../assets/images/home/jaguar.png";
import nissanImg from "../../assets/images/home/nissan.png";
import volvoImg from "../../assets/images/home/volvo.png";

const Brands = () => {
  return (
    <div className=" my-5">
      <Swiper
       breakpoints={{
        320: { slidesPerView: 2 },
        480: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1200: { slidesPerView: 5 },
      }}
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        speed={1000}
        autoplay={true}
        centeredSlides={true}
        loop={true}
      
        className="mySwiper"
      >
        <SwiperSlide className="d-flex justify-content-center">
          <img src={acImg} alt="ac image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={audiImg} alt="audi image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={jaguarImg} alt="jaguar image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={nissanImg} alt="nissan image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={volvoImg} alt="volvo image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={nissanImg} alt="nissan image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={volvoImg} alt="volvo image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={nissanImg} alt="nissan image" />
        </SwiperSlide>
        <SwiperSlide className="d-flex justify-content-center">
          <img src={volvoImg} alt="volvo image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
