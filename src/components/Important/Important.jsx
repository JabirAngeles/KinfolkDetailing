import React from "react";
import "./Important.css";
import { AiOutlineWarning } from "react-icons/ai";
const Important = () => {
  return (
    <div className="i-container">
      <div className="redline" />
      <div className="flexCenter">
        <AiOutlineWarning className="warn" size="50px" />
        <h1 className="i1-header">Important!</h1>
        <AiOutlineWarning className="warn" size="50px" />
      </div>
      <h3 className="i3-header">
        Be aware that we need you to provide water and electricity
      </h3>
    </div>
  );
};

export default Important;
