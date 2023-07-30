import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  // setMenuOpened(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 850) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings h-container">
        <p className="KNFK">KNFK</p>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a
              href="https://www.instagram.com/knfkdetailing/"
              className="social-icons"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093984087242"
              className="social-icons"
            >
              <AiFillFacebook />
            </a>

            <a
              href="https://www.tiktok.com/@knfkdetailing"
              className="social-icons"
            >
              <SiTiktok />
            </a>

            <a href="#Services">Services</a>
            <a href="#AboutUs">About Us</a>
            <a href="#ContactUs">Contact Us</a>
            <button type="button" href="tel:3855286342" className="button">
              <a href="tel:3855286342">Call Us</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
