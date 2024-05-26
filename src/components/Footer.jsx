import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 h-32 flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <img
          src="https://popthaiorlando.com/wp-content/uploads/2024/01/pop-thai-transparent-300x140-1.png"
          alt="PopThai Logo"
          className="h-12 mb-2 mx-auto"
        />
        <p className=" text-4xl mt-2 mb-2 text-left">
            ORLANDO'S AUTHENTIC
            <br />
            THAI FOOD EXPERIENCE
          </p>
        <button
          className="mt-2 px-8 py-4 bg-[#1FA405] text-[#F9F6EF] text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white"
          onClick={() => (window.location.href = "#home")}
        >
          Order Now
        </button>
      </div>
    </footer>
  );
}

export default Footer;
