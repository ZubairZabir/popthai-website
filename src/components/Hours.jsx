import React from "react";
import { Element } from "react-scroll";

function Hours() {
  return (
    <Element name="dining-hours">
      <section className="bg-white h-screen flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <h2 className="text-6xl font-medium mb-10 text-center">DINING HOURS</h2>
          <div className="mb-8 p-4 bg-[#F9F6EF] rounded-[24px] drop-shadow w-full">
            <h3 className="text-2xl mb-2">LUNCH HOURS</h3>
            <p>MONDAY : CLOSED</p>
            <p>TUESDAY - FRIDAY : 11:00 AM to 3:00 PM</p>
          </div>
          <div className="p-4 bg-[#F9F6EF] rounded-[24px] drop-shadow w-full">
            <h3 className="text-2xl mb-2">DINNER HOURS</h3>
            <p>MONDAY : CLOSED</p>
            <p>TUESDAY - FRIDAY : 5:00 PM to 10PM</p>
            <p>SATURDAY : 12:00 PM to 10PM</p>
            <p>SUNDAY : 12:00PM to 9:00PM</p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Hours;
