import React from "react";
import "./Availability.css";
import { BsFillCalendar3WeekFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";

const Availability = () => {
  return (
    <div className="containerAA">
      <div id="Availability" className="Availability">
        <div className="textContainer">
          <h1>KINFOLK</h1>
        </div>
        <div className="HoursOp">
          <h3>
            Hours <br />
            of <br />
            Operation
          </h3>
          <div className="reactIcons">
            <BsFillCalendar3WeekFill />
          </div>
          <ul>
            <li>Monday: 12am - 7pm</li>
            <li>Tuesday: 12am - 7pm</li>
            <li>Wednesday: 12am - 7pm</li>
            <li>Thursday: 12am - 7pm</li>
            <li>Friday: 12am - 7pm</li>
            <li>Satuday: 8am - 3pm</li>
            <li>Sunday: 8am - 3pm</li>
          </ul>
        </div>
        <div className="Locations">
          <h3>Locations</h3>
          <div className="reactIcons">
            <GrMapLocation />
          </div>
          <ul>
            <li>Orem</li>
            <li>Vineyard</li>
            <li>Lehi</li>
            <li>Eagle Mountain</li>
            <li>Saratoga Springs</li>
            <li>Draper</li>
            <li>Herriman</li>
            <li>South Jordan</li>
            <li>Contact us for other locations</li>
          </ul>
        </div>
        <div className="PayMethods">
          <h3>
            Payment <br /> Methods
          </h3>
          <div className="reactIcons">
            <MdOutlinePayment />
          </div>
          <ul>
            <li>Cash</li>
            <li>Venmo</li>
            <li>Zelle</li>
            <li>Cashapp</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Availability;
