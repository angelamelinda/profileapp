import React from "react";
import { GlobalStyle } from "./index.styled";
import Profile from "./containers/Profile";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComments,
  faPaintBrush,
  faCubes,
  faBullhorn,
  faPollH,
  faChartLine
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faComments,
  faPaintBrush,
  faCubes,
  faBullhorn,
  faPollH,
  faChartLine
);

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Profile />
    </>
  );
};

export default App;
