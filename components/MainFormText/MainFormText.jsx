import React from "react";
import Image from "next/image";
import laLogo from "../../public/assets/little-aryans-logo.webp";
import Form from "../Form/Form";
import homeImage from "../../public/assets/homeImage.png";

const MainFormText = () => {
  return (
    <div className="container mx-auto p-4">
      {/* First Row: Two Columns */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 p-6">
          <div className="mainContainer">
            <h1>Growing with values and learning with joy.</h1>
            <p>
              We follow a unique curriculum based on our Chinmaya Vision Program
            </p>
            <Image src={homeImage} alt="Home Image" />
          </div>
        </div>
        <div className="flex-1 p-6 text-center">
          <Form />
        </div>
      </div>

      {/* Second Row: Three Columns */}
    </div>
  );
};

export default MainFormText;
