import React, { useState, useEffect } from "react";
import hamb from "../assets/imgs/hamb.png";
import yt from "../assets/imgs/yt.png";
import user from "../assets/imgs/user.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils2/store/appSlice";
import { SEARCH_SUGGEST} from "../utils2/constants";


const Head = () => {
  const [searchQurey, setsearchQuery] = useState("");
  useEffect(() => {
    // Implementing Debouncing for 3ms  to logic(when key is 
    //pressed useeff is called and if key is again pressed 
    //before 2ms them that previous api will cancelled )
    const timer = setTimeout(()=>getQuerySuggestions(),300);
    return ()=>{
      clearTimeout(timer)
    }
  
  }, [searchQurey]);
  const getQuerySuggestions = async () => {
    // Calling a suggest query api to get a suggestion based on user typing in the search bar on every keystroke
    const data = await fetch( SEARCH_SUGGEST+searchQurey);
    const json = await data.json();
    console.log(json[1]);
  };
  const dispatch = useDispatch();
  const toggleSlidebarHandler = () => {
    //This function used to update the slice for toggling the slide bar menu
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col m-2 p-4 shadow-xl fixed -top-2 w-full bg-white " >
      <div className="flex col-span-1 ">
        <img
          className=" h-8 cursor-pointer"
          src={hamb}
          onClick={toggleSlidebarHandler}
        ></img>
        <img className="h-8 mx-4" src={yt} />
      </div>
      <div className="col-span-10 pl-56 ">
        <input
          onChange={(e) => setsearchQuery(e.target.value)}
          value={searchQurey}
          className="p-3 border w-96 h-8 border-gray-600 rounded-l-full"
          type="text"
        />
        <div className="fixed shadow-lg bg-white w-[24rem] border rounded-lg border-gray-200">
          <ul className="px-2 py-2 ">
            <li className="hover:bg-gray-200">🔍 iphone</li>
            <li className="hover:bg-gray-200">🔍 iphone</li>
            <li className="hover:bg-gray-200">🔍 iphone</li>
            <li className="hover:bg-gray-200">🔍 iphone</li>
          </ul>
        </div>
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
