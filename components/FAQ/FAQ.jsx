"use client"
import React from "react";
import Image from "next/image";
import { useState } from "react";
import AdmissionFAQ from "../AdmissionFAQ/AdmissionFAQ";
import Testimonials from "../Testimonials/Testimonials";

const Faqs = () => {
  return (
    <div className="faq flex justify-center px-5"><div className="faqsPage">
    <div className="faqDescription infoSection">
      <div className="infoSectionInner">
       
        <div className="faqDescImg">
          {/* <Image src={FAQ1} alt="Kalyan" /> */}
        </div>
      </div>
    </div>

    {/*  FAQ Main List */}
    <div className="faqMainList">
      <div className="mainListInner">{/* Add your navigation items */}</div>
    </div>

    {/* Admission Questions */}
    <AdmissionFAQ />
    <Testimonials/>
  </div></div>
  );
};

export default Faqs;
