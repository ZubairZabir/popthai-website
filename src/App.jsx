import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Story from "./components/Story";
import Hours from "./components/Hours";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Home />
      <Menu />
      <Story />
      <Hours />
      <Footer />
    </div>
  );
}

export default App;
