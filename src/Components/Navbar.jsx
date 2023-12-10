import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="flex justify-between border bg-[#0f7bd4] h-[60px] w-full shadow-xl fixed">
      <Link to="/" className="px-5 my-auto text-4xl text-white">
        <IoBagHandle />
      </Link>
      <h1 className=" text-4xl my-auto  ml-5 text-[#fdcd08] font-bold">
        Shop IT
      </h1>
      <Link
        to="/cart"
        className="mx-5 px-5 my-auto  text-white hover:text-orange-400"
      >
        <FaCartShopping className="text-3xl" />
      </Link>
    </div>
  );
};
