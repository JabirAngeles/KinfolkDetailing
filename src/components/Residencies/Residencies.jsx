import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import data2 from "../../utils/slider2.json";
import data3 from "../../utils/slider3.json";
import { sliderSetting } from "../../utils/common";

const Residencies = () => {
  return (
    <section id="Services" className="r-wrapper">
      <div className="innerWidth r-container">
        <div className="r-head flexColStart">
          <h1 className="primaryText">All Services</h1>

          <div className="carDetailing">
            <h2 className="orangeText">Car Detailing</h2>
            <Swiper {...sliderSetting}>
              <SliderButtons />
              {data.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="home" className="imagen" />
                    <span className="r-price">
                      <span style={{ color: "white" }}>$&nbsp;</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="Add-Ons">
            <h2 className="orangeText">Add-Ons</h2>
            <Swiper {...sliderSetting}>
              <SliderButtons />
              {data2.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="home" />
                    <span className="r-price">
                      <span style={{ color: "white" }}>$&nbsp;</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="OtherServices">
            <h2 className="orangeText">Other Services</h2>
            <Swiper {...sliderSetting}>
              <SliderButtons />
              {data3.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="flexColStart r-card">
                    <img src={card.image} alt="home" />
                    <span className="r-price">
                      <span style={{ color: "white" }}>$&nbsp;</span>
                      <span>{card.price}</span>
                    </span>
                    <span className="primaryText">{card.name}</span>
                    <span className="secondaryText">{card.detail}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
