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
    <section className="bg-white h-screen flex flex-col items-center justify-center p-8">
      <Element name="menu">
        <h2 className="text-6xl mb-4">MENU</h2>
        <div className="relative w-full flex items-center justify-center">
          <button
            onClick={prevItem}
            className="absolute left-0 p-2 bg-gray-200 rounded-full text-xl"
            style={{ marginLeft: "10px" }}
          >
            &larr;
          </button>
          <div className="flex w-full justify-center space-x-4">
            {menuItems
              .slice(currentItem, currentItem + 4)
              .map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-64 h-64 object-cover"
                  />
                  <h3 className="text-xl mt-2">{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
          </div>
          <button
            onClick={nextItem}
            className="absolute right-0 p-2 bg-gray-200 rounded-full text-xl"
            style={{ marginRight: "10px" }}
          >
            &rarr;
          </button>
        </div>
        <button
          className="mt-4 px-8 py-4 bg-green-500 text-white rounded-full"
          onClick={() => (window.location.href = "https://example.com")}
        >
          See More
        </button>
      </Element>
    </section>
  );
}

export default Menu;
