import About from "components/About";
import Banner from "components/Banner";
import Navbar from "components/Navbar";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar items={["Home", "Articles", "Projects"]}></Navbar>
      <Banner title="Levy Santiago" />
      <About title="Um pouco" titleContinuation="Sobre Levy" />
    </div>
  );
};

export default HomePage;
