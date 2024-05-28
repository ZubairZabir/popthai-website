import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="bg-[#F9F6EF] h-screen flex flex-col items-center p-4 md:p-8">
      <Navbar />
      <div className="w-full flex flex-wrap justify-center mb-4 md:mb-8 text-sm md:text-xl">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer link-hover"
        >
          Home
        </Link>
        <Link
          to="menu"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer link-hover"
        >
          Menu
        </Link>
        <Link
          to="our-story"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer link-hover"
        >
          Our Story
        </Link>
        <Link
          to="dining-hours"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer link-hover"
        >
          Dining Hours
        </Link>
        <a
          href="tel:+14072035088"
          className="m-2 p-2 text-black cursor-pointer link-hover"
        >
          Contact Us
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-10 md:mt-20">
        <div className="flex flex-col items-center md:items-start flex-grow mb-4 md:mb-0">
          <Link to="home" name="home">
            <img
              src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
              alt="Logo"
              className="h-auto w-40 md:w-80 mb-2"
            />
          </Link>
          <p className="text-2xl md:text-4xl mt-2 mb-2 text-center md:text-left">
            ORLANDO'S AUTHENTIC
            <br />
            THAI FOOD EXPERIENCE
          </p>
          <button className="mt-2 px-6 py-3 md:px-8 md:py-4 bg-[#1FA405] text-[#F9F6EF] text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white">
            Order Now
          </button>
        </div>
        <div className="flex-grow">
          <img
            src="https://media.timeout.com/images/102431833/750/422/image.webp"
            alt="Right"
            className="h-auto w-full max-w-sm md:max-w-xl rounded-[24px] mr-0 md:mr-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
