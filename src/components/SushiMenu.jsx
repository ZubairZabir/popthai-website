import React, { useState } from "react";
import { Link, Element } from "react-scroll";

const sushiItems = [
  {
    id: 1,
    name: "California Roll",
    description: "Crab, avocado, and cucumber.",
    image:
      "https://norecipes.com/wp-content/uploads/2019/12/best-california-roll-003-1025x1536.jpg",
  },
  {
    id: 2,
    name: "Spicy Tuna Roll",
    description: "Tuna, spicy mayo, and cucumber.",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2020/12/Spicy-Tuna-Rolls-8963.jpg",
  },
  {
    id: 3,
    name: "Salmon Nigiri",
    description: "Fresh salmon over rice.",
    image:
      "https://aisforappleau.com/wp-content/uploads/2023/07/how-to-make-sushi-salmon-nigiri-2.jpg",
  },
  {
    id: 4,
    name: "Eel Avocado Roll",
    description: "Eel, avocado, and eel sauce",
    image:
      "https://132027963.cdn6.editmysite.com/uploads/1/3/2/0/132027963/s275295847680532422_p163_i2_w1920.jpeg?width=2400&optimize=medium",
  },
  {
    id: 5,
    name: "Shrimp Tempura Roll",
    description: "Tempura shrimp, avocado, and cucumber",
    image:
      "https://norecipes.com/wp-content/uploads/2022/02/shrimp-tempura-roll-003-1025x1536.jpg",
  },
  {
    id: 6,
    name: "Rainbow Roll",
    description: "Crab, avocado, and cucumber topped with assorted fish.",
    image:
      "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/cswnyzje/0fe3934a-120d-4b6b-9819-478bac965841.jpg",
  },
  {
    id: 7,
    name: "Dragon Roll",
    description: "Eel, cucumberm and avocado topped with eel sauce.",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0293-II.jpg",
  },
  {
    id: 8,
    name: "Veggie Roll",
    description: "Assorted vegetables wrapped in rice and seaweed.",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2023/05/Vegetarian-Sushi-Rolls-9637-II-1024x1536.jpg",
  },
];
function Menu() {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % sushiItems.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + sushiItems.length) % sushiItems.length);
  };

  return (
    <section className="bg-white h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <Element name="menu">
        <h2 className="text-4xl md:text-6xl font-medium mb-6 md:mb-10 text-center">
          MENU
        </h2>
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prevItem}
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 p-2 py-2 md:py-4 bg-gray-200 text-gray-800 rounded-full text-lg md:text-xl transition-all duration-300 hover:bg-gray-300 hover:text-gray-900"
          >
            &larr;
          </button>
          <div className="flex w-full justify-center items-center space-x-2 md:space-x-4">
            {sushiItems
              .slice(
                currentItem,
                currentItem + (window.innerWidth < 768 ? 1 : 4)
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full md:w-auto"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 md:w-64 md:h-64 object-cover rounded-[24px]"
                  />
                  <h3 className="text-lg md:text-xl mt-2 md:mt-4">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
          </div>
          <button
            onClick={nextItem}
            className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 p-2 py-2 md:py-4 bg-gray-200 text-gray-800 rounded-full text-lg md:text-xl transition-all duration-300 hover:bg-gray-300 hover:text-gray-900"
          >
            &rarr;
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button
            className="mt-6 md:mt-10 px-6 md:px-8 py-3 md:py-4 bg-[#1FA405] text-[#F9F6EF] text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-[#178204] hover:text-white"
            onClick={() =>
              (window.location.href =
                "https://order.toasttab.com/online/pop-thai-mills")
            }
          >
            See More
          </button>
        </div>
      </Element>
    </section>
  );
}

export default Menu;
