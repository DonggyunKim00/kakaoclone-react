import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyle";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import OpenSearch from "./components/onClickitem/OpenSearch";
import OpenBurger from "./components/onClickitem/OpenBurger";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [changeClass, setChangeClass] = useState("hidden");
  const [burgerClick, setBurgerClick] = useState(false);
  const [burgerClass, setBurgerClass] = useState("closeBurger");

  const time = new Date();
  let imgnum = time.getDate();

  // header의 search 버튼 인지 => isClick : true
  const getClickEvent = (isClick) => {
    setIsClick(isClick);
    setChangeClass("visible");
  };
  // opensearch의 버튼 인지 => isClick : false
  const getClickEvent2 = (isClick) => {
    setIsClick(isClick);
    setChangeClass("hidden");
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
        mgnum={imgnum}
        getClickEvent={getClickEvent}
        getClickEvent3={getClickEvent3}
      />
      <BodyDiv>
        <Maincontent className={changeClass} imgnum={imgnum} />
        <Footer />
      </BodyDiv>
      <HiddenOpenSec>
        <OpenSearch className={changeClass} getClickEvent2={getClickEvent2} />
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
  .visible {
    transform: translateY(257px);
    transition: transform 0.6s;
  }

  .hidden {
    transform: translateY(0);
    transition: transform 0.6s;
  }
`;
const HiddenOpenSec = styled.div`
  .visible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.6s;
  }

  .hidden {
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
    transform: translateX(4000px);
    transition: transform 0.3s ease-in-out;
  }
`;
