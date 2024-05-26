import React from "react";
import { Element } from "react-scroll";

function Story() {
  return (
    <Element name="our-story">
      <section className="bg-gray-200 h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center">
          <h2 className="text-6xl mb-4">Our Story</h2>
          <div className="bg-white p-6 rounded shadow-mid">
            <p>
              Welcome to Pop Thai, Orlando's top Thai restaurant. Our chefs
              craft authentic dishes using fresh, high-quality ingredients for
              take-out and dine-in. Thai food, known for its health benefits, is
              prepared to order for customized flavors. Experience the enjoyable
              and relaxed Thai culture with a perfect blend of sweet, salty,
              sour, and bitter tastes, enhanced by herbs like lemongrass, kaffir
              lime, and Thai basil. At Pop Thai, we deliver a culinary journey
              that transports you to Thailand with every bite. Join us for an
              unforgettable dining adventure.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Story;
