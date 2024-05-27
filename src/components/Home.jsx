import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <section className="bg-[#F9F6EF] h-screen flex flex-col items-center p-8">
      <div className="w-full flex justify-center mb-8 text-xl">
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
      </div>
      <div className="flex justify-center items-center w-full ml-40 mt-20">
        <div className="flex flex-col items-start flex-grow">
          <Link to="home" name="home">
            <img
              src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
              alt="Logo"
              className="h-auto w-80 mb-2"
            />
          </Link>
          <p className=" text-4xl mt-2 mb-2 text-left">
            ORLANDO'S AUTHENTIC
            <br />
            THAI FOOD EXPERIENCE
          </p>
          <button className="mt-2 px-8 py-4 bg-[#1FA405] text-[#F9F6EF] text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white">
            Order Now
          </button>
        </div>
        <div className="flex-grow">
          <img
            src="https://media.timeout.com/images/102431833/750/422/image.webp"
            alt="Right"
            className="h-auto max-w-xl rounded-[24px] mr-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
