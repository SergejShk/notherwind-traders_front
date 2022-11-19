import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../appBar/AppBar";
import Header from "../header/Header";
import { MainWrapper, Wrapper } from "./SharedLayout.style";

const SharedLayout: React.FC = () => {
  const [isOpenBar, setIsOpenBar] = useState(false);

  const toggleAppBar = () => setIsOpenBar(!isOpenBar);

  return (
    <MainWrapper className={isOpenBar ? "isOpen" : "false"}>
      <AppBar />
      <Wrapper>
        <Header toggleAppBar={toggleAppBar} />
        <Outlet />
      </Wrapper>
    </MainWrapper>
  );
};

export default SharedLayout;
