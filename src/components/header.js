import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const HeaderDiv = styled.div`
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1000;
  box-sizing: border-box;
`;
const StyledHeader = styled.div`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  height: 60px;
  max-width: 1296px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const HiddenSec = styled.section`
  display: ${(props) => (props.hidden ? "none" : "block")};
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: white;
  z-index: 1000;
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
  content: url("https://www.kakaocorp.com/page/calendar/light/ico_date${(
    props
  ) => props.imgnum || 1}.gif");
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

function Header({ imgnum }) {
  const [scroll, setScroll] = useState(true);
  const [scrollValue, setScrollValue] = useState(window.scrollY);
  const [updown, setUpdown] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 160 || updown == true) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 스크롤이 160px 이상내려가면 다음 조건들
  // 스크롤이 내려가면 down => header의 display none
  // 스크롤이 올라가면 up => header의 display on
  // prev < curr ? scrolldown : scrollup

  const handleScrollValue = () => {
    setScrollValue(window.scrollY);
    if (window.scrollY >= 165) {
      if (scrollValue < window.scrollY) {
        setUpdown(true);
      } else {
        setUpdown(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollValue);
    return () => window.removeEventListener("scroll", handleScrollValue);
  }, []);

  console.log(scrollValue);
  console.log(updown);

  return (
    <>
      <HeaderDiv>
        <StyledHeader hidden={updown}>
          <h1>kakao</h1>
          <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
            <FontAwesomeIcon icon={faBurger} size='2x' />
          </div>
        </StyledHeader>
      </HeaderDiv>

      <HiddenSec hidden={scroll}>
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
