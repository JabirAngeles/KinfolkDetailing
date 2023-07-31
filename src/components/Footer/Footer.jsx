import React from "react";
import "./Footer.css";
import { AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <section className="footer">
      <ul className="menu">
        <p>© KinfolkDetailing | All rights reserved</p>

        <li>
          <a href="#home">KinfolkDetailing</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#Availability">Availability</a>
        </li>
        <li>
          <a href="#ContactUs">Contact</a>
        </li>
        <li>
          <a href="https://www.instagram.com/knfkdetailing/">
            <AiOutlineInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100094081762517&mibextid=LQQJ4d">
            <AiFillFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@knfkdetailing">
            <SiTiktok />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
