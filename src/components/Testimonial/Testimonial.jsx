import testStyles from "./Testimonial.module.css";
import boyImg from "../../assets/images/home/sec-6/boy.png";
import girlImg from "../../assets/images/home/sec-6/girl.png";
import starImg from "../../assets/images/card/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  return (
    <div className={testStyles.testimonial}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center">
              <div>
                <div
                  className={`d-flex justify-content-center m-4 ${testStyles.textText}`}
                >
                  TESTIMONIALS
                </div>
              </div>
            </div>
            <h1 className={`text-center mb-5 ${testStyles.testTitle}`}>
              What peole say about us?
            </h1>
          </div>
          <Swiper
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
            }}
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={30}
            speed={2000}
            autoplay={true}
            centeredSlides={true}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={` mb-3 mx-2 ${testStyles.cardTest}`}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={boyImg}
                      alt="..."
                      className={`img-fluid w-100  ${testStyles.cardImg}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className={`card-body ${testStyles.cardBody}`}>
                      <h1 className={testStyles.cardTitle}>
                        5.5 <span className={testStyles.cardSpan}>stars</span>
                      </h1>
                      <div>
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                      </div>
                      <p className={testStyles.cardTst}>
                        “I feel very secure when using caretalls services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <div className={testStyles.cardTst2}>
                        <p className="bold mb-0">Charlie Johnson</p>
                        <small className={testStyles.textMuted}>
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` mb-3 mx-2 ${testStyles.cardTest}`}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={girlImg}
                      alt="..."
                      className={`img-fluid w-100 ${testStyles.cardImg}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className={`card-body ${testStyles.cardBody}`}>
                      <h1 className={testStyles.cardTitle}>
                        5.5 <span className={testStyles.cardSpan}>stars</span>
                      </h1>
                      <div>
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                      </div>
                      <p className={testStyles.cardTst}>
                        “I feel very secure when using caretalls services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <div className={testStyles.cardTst2}>
                        <p className="bold mb-0">Charlie Johnson</p>
                        <small className={testStyles.textMuted}>
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` mb-3 mx-2 ${testStyles.cardTest}`}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={girlImg}
                      alt="..."
                      className={`img-fluid w-100 ${testStyles.cardImg}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className={`card-body ${testStyles.cardBody}`}>
                      <h1 className={testStyles.cardTitle}>
                        5.5 <span className={testStyles.cardSpan}>stars</span>
                      </h1>
                      <div>
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                      </div>
                      <p className={testStyles.cardTst}>
                        “I feel very secure when using caretalls services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <div className={testStyles.cardTst2}>
                        <p className="bold mb-0">Charlie Johnson</p>
                        <small className={testStyles.textMuted}>
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={` mb-3 mx-2 ${testStyles.cardTest}`}>
                <div className="row g-0">
                  <div className="col-md-6">
                    <img
                      src={boyImg}
                      alt="..."
                      className={`img-fluid w-100  ${testStyles.cardImg}`}
                    />
                  </div>
                  <div className="col-md-6">
                    <div className={`card-body ${testStyles.cardBody}`}>
                      <h1 className={testStyles.cardTitle}>
                        5.5 <span className={testStyles.cardSpan}>stars</span>
                      </h1>
                      <div>
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                        <img src={starImg} />
                      </div>
                      <p className={testStyles.cardTst}>
                        “I feel very secure when using caretalls services. Your
                        customer care team is very enthusiastic and the driver
                        is always on time.”
                      </p>
                      <div className={testStyles.cardTst2}>
                        <p className="bold mb-0">Charlie Johnson</p>
                        <small className={testStyles.textMuted}>
                          Last updated 3 mins ago
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
