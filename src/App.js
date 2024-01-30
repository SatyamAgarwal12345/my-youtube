import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils2/store/store";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  const route = createBrowserRouter([
    // This browser router will create a route when we are on a home
    // page it will render the header already and a body also and in
    // body I have define children routes when it is in body it will
    // also render the main container which will be containing the
    // buttons and the video container and when it is in watch route
    // it will not render main container instead of that it will
    //render  watchpage component inside body component where i have
    // defined OUTLET
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);
  return (
    <div>
      <Provider store={store}>
        <div className="">
          <BrowserRouter>
            <Head />
          </BrowserRouter>
          <RouterProvider router={route} />
        </div>
      </Provider>
    </div>
  );
}

export default App;

{
  /*       
Header
Body
  SliderBar
    MenuItems
  MainConatiner
    ButtonsList
    VideoContainer
      VideoCards       
*/
}
