import React from "react";
import { Element } from "react-scroll";

function Story() {
  return (
    <Element name="our-story">
      <section className="bg-[#F9F6EF] h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-6xl font-medium mb-10 text-center">OUR STORY</h2>
          <div className="bg-white p-6 rounded-[24px] drop-shadow">
            <p className="text-xl text-left">
              Welcome to Pop Thai, Orlando's top Thai restaurant. Our chefs
              craft authentic dishes using fresh, high-quality ingredients for
              take-out and dine-in. Thai food, known for its health benefits, is
              prepared to order for customized flavors. Experience the enjoyable
              and relaxed Thai culture with a perfect blend of sweet, salty,
              sour, and bitter tastes, enhanced by herbs like lemongrass, kaffir
              lime, and Thai basil. At Pop Thai, we deliver a culinary journey
              that transports you to Thailand with every bite.
            </p>
            <p className="text-xl font-semibold text-left mt-4">
              Join us for an unforgettable dining adventure.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Story;
