import React from "react";
import { useSelector } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";

const SlideBar = () => {
  const toggleMenu = useSelector(store=>store.app.isMenuOpen)
  //togelling slidebar bar based on store  value of isMenuOpen 
  if(!toggleMenu) return 
  return (
    <div className="shadow-2xl w-48 pl-5 pr-8">
      <ul className="mt-2">
        <Link to={'/'}><li>Home</li></Link>
        
        <li>Shots</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold mb-2">Subscriptions</h1>
      <ul>
        <li>Gaming</li>
        <li>Education</li>
        <li>Learning</li>
        <li>Dancing</li>
        <li>Music</li>
        <li>Playing</li>
      </ul>
      <h1 className="font-bold mb-2">Watch Later</h1>
      <ul>
        <li>Gaming</li>
        <li>Education</li>
        <li>Learning</li>
        <li>Dancing</li>
        <li>Music</li>
        <li>Playing</li>
      </ul>
    </div>
  );
};

export default SlideBar;
