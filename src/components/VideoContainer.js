import { YT_VIDEO_API } from "../utils2/constants";
import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils2/store/appSlice";
import Shimmer from "../utils2/store/Shimmer";


const VideoContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    videoApiCall();
    dispatch(openMenu());
  }, []);
  const [videos, setVideos] = useState();
  const videoApiCall = async () => {
    const data = await fetch(YT_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  if (!videos) return <Shimmer/>;
  return (
    <div className=" flex flex-wrap">
      {videos.map((info, index) => (
        <Link to={"/watch?v=" + info.id}>
          <VideoCard key={index} info={info} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
