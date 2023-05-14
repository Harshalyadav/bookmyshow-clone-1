import React, { useState } from "react";
import {
  BiChevronRight,
  BiSearch,
  BiMenu,
  BiChevronDown,
} from "react-icons/bi";
import SignInModal from "../SignInModal/signin.component";




const NavSm = () => {
  
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Bengaluru <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BiSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
          <SignInModal setIsOpen={setIsOpen} isOpen={isOpen}  />
      <BiSearch />
      <input
        type="search"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, Plays, Sports and Activities."
      />
    </div>
  );
};
const NavLg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCity, setIsCity] = useState(false);
  // const [price, setPrice] = useState(0)

  const cityList =[
    {name: "Bilaspur"},
    {name: "Raipur"},
    {name: "Pune"},
    {name: "Bhopal"},
  ]

  const signInStatus = () => {
    setIsOpen(true);
  
  };
  const cityDropDowns =()=>{
 setIsCity(true);
// console.log("true")

  }
  return (
    <>
    <SignInModal setIsOpen={setIsOpen} isOpen={isOpen}  />
    {/* <h1>hello</h1> */}
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-12 h-12">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-2 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-3"onClick={cityDropDowns}>  
         <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white" >
            Bengaluru <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded"  onClick={signInStatus}>
            Sign in
          </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0)
  return (
    <>
      <nav className="bg-bms-700 p-4">
        <div className="md:hidden">
          {/* Mobile screen */}
          
          <NavSm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab screen */}
          <NavMd />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
