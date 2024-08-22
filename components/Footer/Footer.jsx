import React from "react";
import Image from "next/image";
import littlearyanslogo from "../../public/assets/little-aryans-logo.webp";
import Underline from "../../public/assets/footer-border.png";
import teamLine from "../../public/assets/team-line.png";
import {
RiYoutubeFill,
RiTwitterXFill,
RiFacebookFill,
RiWhatsappFill,
RiInstagramLine,
RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
return (
  <div>
    <footer className="footerPage">
      <div className="headBottomLine">
        <Image src={Underline} alt="Kindergarten Readiness" />
      </div>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 justify-center items-center mt-8">
              <Image src={littlearyanslogo} alt="" height={500} width={250} />
              <div className="logoTagline text-center">
                <h6>Happy Child, Happy Nation </h6>
              </div>
            
          </div>
          

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h5 className="mb-3 text-lg font-semibold uppercase text-black">
                About
              </h5>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Centers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Work with Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-lg font-semibold uppercase text-black">
                Program
              </h5>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Pedagogy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Curriculum
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Online Learning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Staff Edurichment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-3 text-lg font-semibold uppercase text-black">
                Parents
              </h5>
              <ul className="text-black font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Parents - Our Partners
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Monthly Calendar
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Our Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <div className="footerLinks sm:flex sm:items-center sm:justify-between mt-8">
          <span className="text-sm sm:text-center">
            All Rights Reserved -
            <a href="#" className="hover:underline">
              Little Aryans Pvt. Ltd
            </a>
          </span>

          <div className="socialLinksIcons flex mt-4 sm:justify-center sm:mt-0">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/littlearyansjbn/"
              aria-label="Little Aryans Facebook Page"
            >
              <div className="socialLinkIcon">
                <RiFacebookFill />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/little_aryans/"
              aria-label="Little Aryans Instagram Page"
            >
              <div className="socialLinkIcon">
                <RiInstagramLine />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/littlearyans"
              aria-label="Little Aryans Youtube Channel"
            >
              <div className="socialLinkIcon">
                <RiYoutubeFill />
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://twitter.com/LittleAryans"
              aria-label="Little Aryans Twitter Page"
            >
              <div className="socialLinkIcon">
                <RiTwitterXFill />
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/littlearyans/"
              aria-label="Little Aryans LinkedIn Page"
            >
              <div className="socialLinkIcon">
                <RiLinkedinBoxFill />
              </div>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/+917498139829/"
              aria-label="Little Aryans Whatsapp Number"
            >
              <div className="socialLinkIcon">
                <RiWhatsappFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
);
};

export default Footer;
