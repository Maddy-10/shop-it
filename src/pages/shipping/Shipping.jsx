import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Shipping = () => {
  const navigate = useNavigate();

  const [alt, setAlt] = useState(false);
  const [hide, setHide] = useState(true);
  const toggle = () => {
    setAlt(true);
    setHide(false);
  };
  const [landmark, setLandmark] = useState(false);
  const [hide1, setHide1] = useState(true);
  const toggle1 = () => {
    setLandmark(true);
    setHide1(false);
  };

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-5xl font-semibold mt-[100px] ml-4">
          Shipping Details :
        </h1>
        <form className="flex flex-col lg:mx-auto mt-10 border-2 px-2 p-5 w-full lg:w-3/4 rounded-xl ">
          <input
            type="text"
            className="border px-2 py-1  text-sm rounded-md"
            placeholder="  Full Name  (Required) *  "
          />
          <input
            type="text"
            className="border px-2 py-1 text-sm  mt-3 rounded-md"
            placeholder="  Phone Number  (Required) *  "
          />
          {hide && (
            <button
              onClick={() => toggle()}
              className="text-[#0f7bd4] text-left text-sm px-2 py-1"
            >
              + Add Alternate Phone Number
            </button>
          )}
          {alt && (
            <input
              type="text"
              className="border px-2 py-1 mt-3 text-sm  rounded-md"
              placeholder="  Alternate Phone Number  "
            />
          )}
          <div className="grid grid-cols-2 gap-5">
            <input
              type="text"
              className="border px-2 py-1 mt-3 text-sm  rounded-md"
              placeholder="  Pincode  (Required) *  "
            />
            <input
              type="text"
              className="border px-2 py-1 mt-3  text-sm rounded-md"
              placeholder="  City  (Required) *  "
            />
            <input
              type="text"
              className="border px-2 py-1 mt-1 text-sm  rounded-md"
              placeholder="  State  (Required) *  "
            />
            <input
              type="text"
              className="border px-2 py-1 mt-1 text-sm  rounded-md"
              placeholder="  Country  (Required) *  "
            />
          </div>
          <input
            type="text"
            className="border px-2 py-1 mt-3  text-sm rounded-md"
            placeholder="  House No., Building Name  (Required) *  "
          />
          <input
            type="text"
            className="border px-2 py-1 mt-3  text-sm rounded-md"
            placeholder="  Road name, Area, Colony  (Required) *  "
          />
          {hide1 && (
            <button
              onClick={() => toggle1()}
              className="text-[#0f7bd4] text-left text-sm px-2 py-1"
            >
              + Add Nearby Famous Shop/Mall/Landmark
            </button>
          )}
          {landmark && (
            <input
              type="text"
              className="border px-2 py-1 mt-3  text-sm rounded-md"
              placeholder="  Nearby Landmark  "
            />
          )}
        </form>
        <button
          className="mx-auto text-xl border px-2 py-1 rounded-lg mt-10 text-white bg-[#0f7bd4]"
          onClick={() => navigate("/Orderplaced")}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
