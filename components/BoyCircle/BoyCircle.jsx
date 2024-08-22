import Image from "next/image";
import React from "react";
import circleBoyImage from "../../public/assets/CircleImage.png";

const BoyCircle = () => {
  return (
    <div className="circleImage">
      <Image src={circleBoyImage} alt="" />
    </div>
  );
};

export default BoyCircle;
