import styled from "styled-components";
import { useState } from "react";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyle";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import OpenSearch from "./components/onClickitem/OpenSearch";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [changeClass, setChangeClass] = useState("hidden");

  const time = new Date();
  let imgnum = time.getDate();

  // header의 버튼 인지 => isClick : true
  const getClickEvent = (isClick) => {
    setIsClick(isClick);
    setChangeClass("visible");
  };
  // opensearch의 버튼 인지 => isClick : false
  const getClickEvent2 = (isClick) => {
    setIsClick(isClick);
    setChangeClass("hidden");
  };

  console.log(isClick);
  console.log(changeClass);

  return (
    <>
      <GlobalStyle />
      <Header isClick={isClick} imgnum={imgnum} getClickEvent={getClickEvent} />
      <BodyDiv>
        <Maincontent className={changeClass} imgnum={imgnum} />
        <Footer />
      </BodyDiv>
      <HiddenSec>
        <OpenSearch className={changeClass} getClickEvent2={getClickEvent2} />
      </HiddenSec>
    </>
  );
}

export default App;
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
const HiddenSec = styled.div`
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
