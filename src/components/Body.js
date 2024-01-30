import React from "react";
import SlideBar from "./SlideBar";
import { Outlet } from "react-router-dom";


const Body = () => {
  return (
    <div className="flex ">
      <SlideBar />
      <Outlet/>
    </div>
  );
};

export default Body;
