import React from "react";
import {  NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex mt-5 justify-between container mx-auto">
      <div className="flex">
       <div>
       <img src="/images/Logo.png" alt="" />
       </div>
        <h1>
          <span className="text-3xl ">Donation</span>
        </h1>
        <p>Campaign</p>
      </div>
      <div className="flex gap-x-4">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/donation"}>Donation</NavLink>
      <NavLink to={"/statistics"}>Statistics</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
