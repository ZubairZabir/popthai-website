import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import SushiMenu from "./components/SushiMenu"

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Menu />
      <SushiMenu/>
      <Hours />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
