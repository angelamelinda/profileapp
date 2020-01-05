import React from "react";
import { GlobalStyle } from "./index.styled";
import Profile from "./containers/Profile";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Profile />
    </>
  );
};

export default App;
