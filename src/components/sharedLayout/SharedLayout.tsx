import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../appBar/AppBar";
import Header from "../header/Header";
import { MainWrapper, Wrapper, WrapperContent } from "./SharedLayout.style";

const SharedLayout: React.FC = () => {
  const [isOpenBar, setIsOpenBar] = useState(false);

  const toggleAppBar = () => setIsOpenBar(!isOpenBar);

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpenBar) body!.style.overflow = "hidden";
    if (!isOpenBar) body!.style.overflow = "auto";
  }, [isOpenBar]);

  return (
    <MainWrapper className={isOpenBar ? "isOpen" : "false"}>
      <AppBar />

      <Wrapper>
        <Header toggleAppBar={toggleAppBar} />

        <WrapperContent>
          <Outlet />
        </WrapperContent>
      </Wrapper>
    </MainWrapper>
  );
};

export default SharedLayout;
