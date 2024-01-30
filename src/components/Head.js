import React from "react";
import hamb from "../assets/imgs/hamb.png";
import yt from "../assets/imgs/yt.png";
import user from "../assets/imgs/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils2/store/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleSlidebarHandler = () => {
    //This function used to update the slice for toggling the slide bar menu
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-4 shadow-xl">
      <div className="flex col-span-1">
        <img
          className=" h-8 cursor-pointer"
          src={hamb}
          onClick={toggleSlidebarHandler}
        ></img>
        <img className="h-8 mx-4" src={yt} />
      </div>
      <div className="col-span-10 pl-56 ">
        <input
          className="border w-96 h-8 border-gray-600 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-600 rounded-r-full px-3 h-8 bg-gray-200 ">
          🔍
        </button>
      </div>
      <div className="col-span-1 pl-20 ">
        <img className="h-8 " src={user}></img>
      </div>
    </div>
  );
};

export default Head;
