import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <section className="bg-gray-100 h-screen flex flex-col items-center p-8">
      <div className="w-full flex justify-center mb-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="menu"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer"
        >
          Menu
        </Link>
        <Link
          to="our-story"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer"
        >
          Our Story
        </Link>
        <Link
          to="dining-hours"
          smooth={true}
          duration={500}
          className="m-2 p-2 text-black cursor-pointer"
        >
          Dining Hours
        </Link>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center flex-grow">
          <Link to="home" name="home">
            <img
              src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
              alt="Logo"
              className="h-64 w-64"
            />
          </Link>
          <p className="mt-2 text-center">
            ORLANDO'S AUTHENTIC
            <br />
            THAI FOOD EXPERIENCE
          </p>
          <button className="mt-2 p-2 bg-green-500 text-white rounded-full">
            Order Now
          </button>
        </div>
        <div className="flex-grow">
          <img
            src="https://media.timeout.com/images/102431833/750/422/image.webp"
            alt="Right"
            className="h-64 w-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
