import Image from "next/image";
import React from "react";
import lineGreen from "../../public/assets/lineGreen.png";
import BoyCircle from "../BoyCircle/BoyCircle";
import DemoClass from "../DemoClass/DemoClass";
import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

const DevelopmentClass = () => {
  return (
    <>
      <section className="developmentClass">
        <div className="mainList">
          <h2 className="liDev">
            We focus on all-around development
            <span className="block w-24 h-1 bg-teal-600"></span>
            {/* <Image src={lineGreen} alt="" height={90} width={100}/> */}
          </h2>
          <ul className="space-y-2 text-sm">
            <li>– Fees starting at just Rs 3,750/Month.</li>
            <li>
              – Value-based education that teaches the importance of our culture
              and traditions.
            </li>
            <li>– Spacious classrooms above 500 sq feet.</li>
            <li>
              – Dedicated Student Success Department to monitor student’s
              overall holistic growth and development.
            </li>
          </ul>
        </div>

        <div className="container mx-auto">
          {/* First Row: Two Columns */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="mainContainer">
                <div>
                  <BoyCircle />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <DemoClass />
            </div>

            
          </div>




          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <div className="mainContainer">
                {/* <div>
                <YoutubeVideo/>
                </div> */}
              </div>
            </div>
            <div className="flex-1">
            <YoutubeVideo/>
            </div>

            
          </div>

          {/* Second Row: Three Columns */}
        </div>
      </section>
    </>
  );
};

export default DevelopmentClass;
