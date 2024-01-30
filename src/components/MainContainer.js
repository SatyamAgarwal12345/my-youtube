
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";


const MainContainer = () => {
  return (
    <div className="overflow-x-auto scrollbar-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
