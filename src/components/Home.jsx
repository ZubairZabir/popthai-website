import React from "react";
import { Link } from "react-scroll";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-[#F9F6EF] mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 h-screen flex flex-col items-center p-4 md:p-8">
        <div className="flex flex-col gap-20 md:flex-row justify-center items-center w-full mt-10 md:mt-20">
          <div className="flex flex-col items-start justify-start md:items-start mb-4 md:mb-0">
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
            <button
              className="mt-2 px-6 py-3 md:px-8 md:py-4 bg-[#1FA405] text-[#F9F6EF] text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white"
              onClick={() =>
                (window.location.href =
                  "https://order.toasttab.com/online/pop-thai-mills")
              }
            >
              Order Now
            </button>
          </div>
          <div>
            <img
              src="https://media.timeout.com/images/102431833/750/422/image.webp"
              alt="Right"
              className="h-auto w-full max-w-sm md:max-w-xl rounded-[24px] mr-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
