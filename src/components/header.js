import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function Header({ imgnum, getClickEvent, isClick }) {
  const [hiddenCal, setHiddenCal] = useState(true);
  const [isWheelDown, setIsWheelDown] = useState(false);
  const [classControl, setClassControl] = useState("headerVisible");

  const showHiddenCal = () => {
    if (window.scrollY > 100) {
      setHiddenCal(false);
    } else {
      setHiddenCal(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showHiddenCal);
    return () => window.removeEventListener("scroll", showHiddenCal);
  }, []);

  const handleWheel = (e) => {
    const direction = e.deltaY > 0 ? true : false;
    if (window.scrollY >= 160) {
      setIsWheelDown(direction);
      setClassControl(direction ? "headerHidden" : "headerVisible");
    } else if (window.scrollY > 0 && window.scrollY < 100) {
      setIsWheelDown(false);
      setClassControl("headerVisible");
    }
  };
  useEffect(() => {
    window.addEventListener("mousewheel", handleWheel);
    return () => window.removeEventListener("mousewheel", handleWheel);
  }, []);

  const onClick = () => {
    getClickEvent(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <HeaderDiv
        hidden={isWheelDown}
        className={classControl}
        isClick={isClick}
      >
        <StyledHeader>
          <h1>kakao</h1>
          <div>
            <FontAwesomeIcon
              onClick={onClick}
              type='button'
              icon={faMagnifyingGlass}
              size='2x'
              className='searchBtn'
            />
            <FontAwesomeIcon type='button' icon={faBurger} size='2x' />
          </div>
        </StyledHeader>
      </HeaderDiv>
      <HiddenSec className={classControl} hidden={hiddenCal}>
        <HiddenCalHeader>
          <ContentDiv>
            <HiddenCalImg imgnum={imgnum} />
            <HiddenCalStr>오늘의 카카오</HiddenCalStr>
          </ContentDiv>
        </HiddenCalHeader>
      </HiddenSec>
    </>
  );
}

export default Header;

const HeaderDiv = styled.div`
  border-bottom: 1px solid #eee;
  position: ${({ isClick }) => (isClick ? "static" : "sticky")};
  top: 0;
  background-color: white;
  z-index: 2;
  box-sizing: border-box;

  .headerVisible {
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
  .headerHidden {
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  height: 60px;
  max-width: 1296px;
  margin: 0 auto;
  box-sizing: border-box;
  .searchBtn {
    margin-right: 24px;
  }
`;

const HiddenSec = styled.section`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: white;
  z-index: 4001;

  .headerVisible {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }
  .headerHidden {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
`;

const HiddenCalHeader = styled.div`
  height: 72px;
  max-width: 1296px;
  margin: 0px auto;
`;

const ContentDiv = styled.div`
  display: flex;
  align-content: center;
  padding: 18px 0px;
  box-sizing: border-box;
`;
const HiddenCalImg = styled.img`
  width: 36px;
  height: 36px;
  content: ${({ imgnum }) =>
    `url(https://www.kakaocorp.com/page/calendar/png/${imgnum}.png)` || 1};
  margin-right: 7px;
`;
//https://www.kakaocorp.com/page/calendar/png/30.png
const HiddenCalStr = styled.strong`
  display: inline-block;
  margin: 2px 0 1px;
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.28px;
`;
