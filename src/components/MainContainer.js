
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";


const MainContainer = () => {
  const toggleMenu = useSelector(store=>store.app.isMenuOpen)
  //Giving some margin right if the toggle menu is visible otherwise no margin right
  const style = toggleMenu ? { marginLeft: '200px' } : {};
  return (
    <div className="overflow-x-auto scrollbar-hidden "style={style}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
