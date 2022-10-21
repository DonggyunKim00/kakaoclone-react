import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function Header({ imgnum, getClickEvent, isClick }) {
  const [hiddenCal, setHiddenCal] = useState(true);
  const [isWheelDown, setIsWheelDown] = useState(false);

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
    if (window.scrollY >= 160) {
      const direction = e.deltaY > 0 ? true : false;
      setIsWheelDown(direction);
    } else if (window.scrollY > 0 && window.scrollY < 100) {
      setIsWheelDown(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousewheel", handleWheel);
    return () => window.removeEventListener("mousewheel", handleWheel);
  }, []);

  const onClick = () => {
    getClickEvent(true);
  };
  return (
    <>
      <HeaderDiv hidden={isWheelDown} isClick={isClick}>
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
      <HiddenSec hidden={hiddenCal}>
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
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  border-bottom: 1px solid #eee;
  position: ${({ isClick }) => (isClick ? "static" : "sticky")};
  top: 0;
  background-color: white;
  z-index: 2;
  box-sizing: border-box;
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
  visibility: ${({ hidden }) => (hidden ? "hidden" : "visible")};
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: white;
  z-index: 4001;
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
    `url(https://www.kakaocorp.com/page/calendar/light/ico_date${imgnum}.gif)`};
  margin-right: 7px;
`;
const HiddenCalStr = styled.strong`
  display: inline-block;
  margin: 2px 0 1px;
  font-size: 18px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.28px;
`;
