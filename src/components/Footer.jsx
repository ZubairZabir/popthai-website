import React from "react";
import popThaiLogo from "../assets/popthai-logo.jpeg";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
      <img
        src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
        alt="Pop Thai Logo"
        className="w-40 md:w-56 mb-5"
      />
      <h1 className="text-lg md:text-2xl mb-5">
        ORLANDO'S AUTHENTIC <br />
        THAI FOOD EXPERIENCE
      </h1>
      <button className="mt-2 px-8 md:px-12 py-4 bg-[#1FA405] text-[#F9F6EF] text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white">
        Order Now
      </button>
      <div className="w-full px-4 mb-5">
        <div className="flex justify-start mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={facebookIcon}
              alt="Facebook"
              className="w-6 h-6 md:w-8 md:h-8 mx-2"
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="w-6 h-6 md:w-8 md:h-8 mx-2"
            />
          </a>
        </div>
        <div className="w-full border-b-2 border-black mb-5"></div>
        <div className="flex flex-col md:flex-row justify-between w-full text-sm px-4">
          <address className="text-xs md:text-sm mb-2 md:mb-0">
            1227 N MILLS AVE | ORLANDO, FL 32803 | 407-203-5088
          </address>
          <footer className="text-xs text-gray-600">
            © COPYRIGHT POP THAI | ALL RIGHTS RESERVED
          </footer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
