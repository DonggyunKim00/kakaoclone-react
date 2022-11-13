import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyle";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import OpenSearch from "./components/onClickitem/OpenSearch";
import OpenBurger from "./components/onClickitem/OpenBurger";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [changeClass1, setChangeClass1] = useState("transHide");
  const [changeClass2, setChangeClass2] = useState("hide");
  const [burgerClick, setBurgerClick] = useState(false);
  const [burgerClass, setBurgerClass] = useState("closeBurger");
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const screenValue = () => {
    setScreenWidth(window.screen.width);
  };
  useEffect(() => {
    window.addEventListener("resize", screenValue);
  }, []);
  const time = new Date();
  let imgnum = time.getDate();

  // header의 search 버튼 인지 => isClick : true
  const getClickEvent = (isClick) => {
    setIsClick(isClick);
    setChangeClass1("transVisible");
    setChangeClass2("visible");
  };
  // opensearch의 버튼 인지 => isClick : false
  const getClickEvent2 = (isClick) => {
    setIsClick(isClick);
    setChangeClass1("transHide");
    setChangeClass2("hide");
  };
  // header의 burger버튼 인지 => isClick : true
  const getClickEvent3 = (burgerClick) => {
    setBurgerClick(burgerClick);
    document.body.classList.add("stopScroll"); // burger가 클릭 되었을때 뒷 배경이 스크롤 됨
    setBurgerClass("openBurger");
  };

  // openburger의 버튼 인지 => isClick : false
  const getClickEvent4 = (burgerClick) => {
    setBurgerClick(burgerClick);
    document.body.classList.remove("stopScroll");
    setBurgerClass("closeBurger");
  };

  return (
    <Outer>
      <GlobalStyle />
      <Header
        isClick={isClick}
        burgerClick={burgerClick}
        imgnum={imgnum}
        getClickEvent={getClickEvent}
        getClickEvent3={getClickEvent3}
      />
      <BodyDiv>
        <Maincontent
          screenWidth={screenWidth}
          className={changeClass1}
          imgnum={imgnum}
        />
      </BodyDiv>
      <Footer screenWidth={screenWidth} />
      <HiddenOpenSec>
        <OpenSearch className={changeClass2} getClickEvent2={getClickEvent2} />
      </HiddenOpenSec>
      <HiddenBurgerSec>
        <OpenBurger className={burgerClass} getClickEvent4={getClickEvent4} />
      </HiddenBurgerSec>
    </Outer>
  );
}

export default App;

const Outer = styled.div`
  .stopScroll {
    height: 100%;
    overflow: hidden;
  }
`;

const BodyDiv = styled.div`
  max-width: 1296px;
  margin: 0 auto;

  .transVisible {
    transform: translateY(257px);
    transition: transform 0.6s;
  }

  .transHide {
    transform: translateY(0);
    transition: transform 0.6s;
  }
  @media screen and (max-width: 1439px) {
    max-width: 952px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1023px) {
    max-width: 660px;
    margin: 0 auto;
  }
`;
const HiddenOpenSec = styled.div`
  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .hide {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.6s, opacity 0.6s;
  }
`;

const HiddenBurgerSec = styled.div`
  .openBurger {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }
  .closeBurger {
    transform: translateX(1500px);
    transition: transform 0.3s ease-in-out;
  }
`;
