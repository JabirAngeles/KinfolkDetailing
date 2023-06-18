import React from "react";
import "./Contact.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Thank you for visiting our car detailing website. We are dedicated
            to providing exceptional car detailing services to ensure your
            vehicle looks its best. If you have any questions, inquiries, or
            would like to schedule an appointment, please don't hesitate to
            reach out to us.{" "}
          </p>
          <div className="info">
            <div className="information">
              <FaPhoneAlt />
              <p>+1 (385)528-6342</p>
            </div>
            <div className="information">
              <MdMessage />
              <p>info@kinfolkdetailing.com</p>
            </div>
            <div className="information">
              <AiFillInstagram />
              <p>@kinfolkdetailing</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="index.html">
            <h3 class="title"> Contact Us</h3>
            <div className="input-container focus">
              <input type="text" name="name" class="input"></input>
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container focus">
              <input type="email" name="email" class="input"></input>
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container focus">
              <input type="tel" name="phone" class="input"></input>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container focus">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="send" class="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
