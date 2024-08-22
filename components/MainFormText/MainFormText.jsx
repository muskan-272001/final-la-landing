import React from "react";
import Image from "next/image";
import BoyCircle from "../../public/assets/BoyCircle.png";
import Form from "../Form/Form";
import homeImage from "../../public/assets/homeImage.png";

const MainFormText = () => {
  return (
    <>
      <section>
        <div className="container mx-auto">
          {/* First Row: Two Columns */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="mainContainer">
                <h1 className="mainFormText text-white">
                  Growing with values and learning with joy.
                </h1>
                <p className="mainFormTextp">
                  We follow a unique curriculum based on our Chinmaya Vision
                  Program
                </p>
                <Image
                  src={BoyCircle}
                  alt="Home Image"
                  height={450}
                  width={300}
                  className="circleBoyImage"
                />
              </div>
            </div>
            <div className="flex-1 text-center">
              <Form />
            </div>
          </div>

          {/* Second Row: Three Columns */}
        </div>
      </section>



      
    </>
  );
};

export default MainFormText;
