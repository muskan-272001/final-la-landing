import React from "react";
import Image from "next/image";
import useFetch from "../../useFetch";
// import Accordion from "react-bootstrap/Accordion";
import Underline from "../../public/assets/footer-border.png";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

const AdmissionFAQ = () => {
  // Fetch FAQ data from Strapi
  const { data } = useFetch(
    "/faqs?populate=*&filters[Category][$eq]=Admission"
  );

  return (
    <div className="AdmissionFAQ">
      <div className="admissionQuestionSection">
      <div className="admissionQuestionHead">
            <h3>ADMISSIONS FAQ:</h3>
            <div className="headBottomLine">
              <Image src={Underline} alt="Kindergarten Readiness" />
            </div>
          </div>

        <div className="mt-6 space-y-4">
          {data.map((faqData) => (
            <Disclosure key={faqData.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-sm font-medium text-black-900 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-black-500 focus-visible:ring-opacity-75">
                  <h4>{faqData.attributes.Question}</h4>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-black-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black-500">
                    <div className="admissionAnswer">
                      <p>{faqData.attributes.Answer}</p>
                    </div>
                  </Disclosure.Panel>
                  <div className="headBottomLine mt-4">
                    <Image src={Underline} alt="Play-Based Learning" />
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionFAQ;
