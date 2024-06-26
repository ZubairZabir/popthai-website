import React, { useState } from "react";
import { Link, Element } from "react-scroll";

const menuItems = [
  {
    id: 1,
    name: "Pad Thai",
    description: "A classic Thai noodle dish.",
    image:
      "https://www.foodandwine.com/thmb/9Vb8WuiTba45J_7HEXV6M58bo2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Shrimp-Pad-Thai-FT-RECIPE0324-3132ca704bc0457e836127dbda403368.jpg",
  },
  {
    id: 2,
    name: "Green Curry",
    description: "Spicy green curry with chicken.",
    image:
      "https://hot-thai-kitchen.com/wp-content/uploads/2022/04/green-curry-new-sq-3.jpg",
  },
  {
    id: 3,
    name: "Tom Yum Soup",
    description: "A spicy and sour Thai soup.",
    image:
      "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
  },
  {
    id: 4,
    name: "Mango Sticky Rice",
    description: "A popular Thai dessert.",
    image:
      "https://elavegan.com/wp-content/uploads/2020/07/drizzling-coconut-sauce-over-mango-sticky-rice-1080x1441.jpg",
  },
  {
    id: 5,
    name: "Spring Rolls",
    description: "Crispy Thai spring rolls.",
    image:
      "https://static01.nyt.com/images/2023/12/21/multimedia/AS-Spring-Rolls-bzjt/AS-Spring-Rolls-bzjt-master768.jpg?width=1024&quality=75&auto=webp",
  },
  {
    id: 6,
    name: "Papaya Salad",
    description: "A tangy and spicy salad.",
    image:
      "https://assets.bonappetit.com/photos/644819df047251c7e5ee250b/1:1/w_960,c_limit/042523-green-papaya-salad-lede.jpg",
  },
  {
    id: 7,
    name: "Thai Iced Tea",
    description: "A sweet and creamy iced tea.",
    image:
      "https://hot-thai-kitchen.com/wp-content/uploads/2022/08/Thai-iced-tea.jpg",
  },
  {
    id: 8,
    name: "Red Curry",
    description: "A rich and spicy curry.",
    image:
      "https://www.recipetineats.com/wp-content/uploads/2018/02/Thai-Red-Curry-Chicken-1.jpg",
  },
];

function Menu() {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((currentItem + 1) % menuItems.length);
  };

  const prevItem = () => {
    setCurrentItem((currentItem - 1 + menuItems.length) % menuItems.length);
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
            {menuItems
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
