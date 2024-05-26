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
        <p>PopThai - Experience the taste of Thailand</p>
        <button
          className="mt-2 p-2 bg-green-500 rounded-full"
          onClick={() => (window.location.href = "#home")}
        >
          Order Now
        </button>
      </div>
    </footer>
  );
}

export default Footer;
