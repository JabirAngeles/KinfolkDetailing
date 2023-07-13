import React from "react";
import "./Hero.css";
import { SiMinutemailer } from "react-icons/si";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*Left Side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "2rem", opacity: 1 }}
              transition={{
                duration: 3,
                type: "spring",
              }}
            >
              Kinfolk <br />
              Detailing <br />
              Auto cleaning
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              {" "}
              Utah based mobile car detailing
            </span>
            <span className="secondaryText">
              Passionates for restoring and protecting your car
            </span>
          </div>
          <div className="flexCenter search-bar">
            <SiMinutemailer color="var(--blue)" size={25} />
            <button className="button">
              <a href="mailto:jabirangeles00@gmail.com">Email Us</a>
            </button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={40} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Covered Miles</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={20} end={100} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={10} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText">Services</span>
            </div>
          </div>
        </div>

        {/*Right side*/}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero.jpeg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
