import React from "react";
import Hero from "./components/Hero.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div className="overflow-x-hidden min-h-screen">
      <Hero />
    </div>
  );
};

export default App;