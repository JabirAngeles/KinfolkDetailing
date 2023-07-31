import React from "react";
import "./Contact.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { loading, setLoading } = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_om094e8",
        "template_6vulb9s",
        {
          from_name: form.name,
          to_name: "Kinfolk",
          from_email: form.email,
          to_email: "info@knfkdetailing.com",
          message: form.message,
          subject: form.phone,
        },
        "EdHdjNuK6nf-lSbUy"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You! I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <div id="ContactUs" className="container">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Thank you for visiting our car detailing website. We are dedicated
            to providing exceptional car detailing services to ensure your
            vehicle looks its best. If you have any questions, inquiries, or
            would like to schedule an appointment, please don't hesitate to
            reach out to us.
          </p>
          <div className="info">
            <div className="information">
              <FaPhoneAlt />
              <button>
                <a href="tel:3855286342">+1 (385)528-6342</a>
              </button>
            </div>
            <div className="information">
              <MdMessage />
              <button>
                <a href="mailto:info@knfkdetailing.com">
                  info@knfkdetailing.com
                </a>
              </button>
            </div>
            <div className="information">
              <AiFillInstagram />
              <button>
                <a href="https://www.instagram.com/knfkdetailing/">
                  @knfkdetailing
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form action="submit" ref={formRef} onSubmit={handleSubmit}>
            <h3 class="title"> Contact Us</h3>

            <div className="input-container focus">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                class="input"
              ></input>
              <label for="">Name</label>
              <span>Name</span>
            </div>

            <div className="input-container focus">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                class="input"
              ></input>
              <label for="">Email</label>
              <span>Email</span>
            </div>

            <div className="input-container focus">
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                class="input"
              ></input>
              <label for="">Phone</label>
              <span>Phone</span>
            </div>

            <div className="input-container focus">
              <textarea
                name="message"
                value={form.Message}
                onChange={handleChange}
                class="input"
              ></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>

            <button type="submit" class="btn" onClick={handleSubmit}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
