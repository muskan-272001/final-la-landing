import React from "react";
import Link from "next/link";

const DemoClass = () => {
  return (
    <div className="mainClassDemo">
      <div className="classHead">
        <h2 className="liDev bg-purple-300 rounded-full">JOIN OUR DEMO CLASS</h2>
      </div>
      <div className="classText">
        Experience the unique learning environment at our institution.
        Enroll in a demo class today and discover the joy of learning with us!
      </div>
      <div className="classButton">
        <button className="applyFreeBtn">Apply Free</button>
      </div>
    </div>
  );
};

export default DemoClass;
