import React from "react";
import Buttons from "./Buttons";

const list = [
  "Gaming",
  "Live",
  "Songs",
  "Education",
  "Development",
  "Coding",
  "Travel",
  "Blogs",
  "Trips",
  "Trending",
  "Communication",
  "Gym",
  "Boxing"
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto">
      {list.map((name, index) => (
        <Buttons key={index} name={name} />
      ))}
      <style>
        {`
          /* Hide scrollbar in WebKit browsers */
          ::-webkit-scrollbar {
            width: 0;
          }
        `}
      </style>
    </div>
  );
};

export default ButtonList;
