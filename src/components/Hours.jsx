import React from "react";
import { Element } from "react-scroll";

function Hours() {
  return (
    <Element name="dining-hours">
      <section className="bg-white h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl text-center">
          <h2 className="text-6xl mb-8">DINING HOURS</h2>
          <div className="mb-4 p-4 bg-gray-100 rounded shadow-lg w-full">
            <h3 className="text-2xl mb-2">LUNCH HOURS</h3>
            <p>MONDAY - CLOSED</p>
            <p>TUESDAY - FRIDAY - 11:00 AM - 3:00 PM</p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow-lg w-full">
            <h3 className="text-2xl mb-2">DINNER HOURS</h3>
            <p>MONDAY - CLOSED</p>
            <p>TUESDAY - FRIDAY - 5:00 PM - 10PM</p>
            <p>SATURDAY - 12:00 PM - 10PM</p>
            <p>SUNDAY - 12:00PM - 9:00PM</p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Hours;
