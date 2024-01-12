import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaX } from "react-icons/fa6";

const Navbar = ({ sidebar, setSidebar }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="absolute top-0 left-0 w-full py-2 text-white z-20">
      <div data-aos="fade-down" className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl sm:text-4xl font-bold uppercase ">
            Straw<span className="font-normal ">Berries</span>
          </h1>
          <ul className="space-x-14 text-xl hidden lg:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Where to find</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div onClick={() => {setSidebar(!sidebar), setIsOpen((prev) => !prev)}}>
            {
              isOpen ? <FaX className="text-4xl" /> : <GiHamburgerMenu className="text-4xl" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;