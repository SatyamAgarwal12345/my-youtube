import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils2/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WatchPage = () => {
  const toggleMenu = useSelector(store=>store.app.isMenuOpen)
  //Giving some margin right if the toggle menu is visible otherwise no margin right
  const style = toggleMenu ? { marginLeft: '200px' } : {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  //Getting VID  from  URL parameters. so that  we can watch the video with this link.
  const [searchParams] = useSearchParams();
  const vid = searchParams.get("v");
  return (
    <div className="p-4 " style={style}>
      <iframe
        width="950"
        height="450"
        src={"https://www.youtube.com/embed/" + vid}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
