import React from "react";
import OrderplacedVideo from "../../assets/images/video/Orderplaced.mp4";
import { useNavigate } from "react-router-dom";

export const Orderplaced = () => {
     const navigate = useNavigate();
  return (
    <div className="bg-[#e5ecf8] flex flex-col h-screen">
      <video
        autoPlay
        muted
        controls={false}
        onEnded={(e) => (e.target.playbackRate = 0)}
        className="w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto pt-52 md:pt-44 lg:pt-32 border"
      >
        <source src={OrderplacedVideo} type="video/mp4" />
  
      </video>
      <button
        onClick={() => navigate("/")}
        className="border-2 hover:border-black mx-auto text-center mt-20 px-5 rounded-lg py-2 2xl:py-5 text-lg md:text-2xl 2xl:text-3xl font-semibold bg-[#0f7bd4] text-white hover:bg-white hover:text-black"
      >
        Continue Shopping
      </button>
    </div>
  );
};
