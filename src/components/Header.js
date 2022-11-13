import styled from "styled-components";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

function Header({
  imgnum,
  getClickEvent,
  isClick,
  getClickEvent3,
  burgerClick,
}) {
  const [hiddenCal, setHiddenCal] = useState("calHidden");
  const [isPageDown, setIsPageDown] = useState("headerVisible");
  const [isPageDown2, setIsPageDown2] = useState("visible");

  const showHiddenCal = () => {
    if (window.screen.width > 1439) {
      if (window.scrollY > 200) {
        setHiddenCal("calVisible");
      } else {
        setHiddenCal("calHidden");
      }
    } else if (window.screen.width > 1023 && window.screen.width <= 1439) {
      if (window.scrollY > 150) {
        setHiddenCal("calVisible");
      } else {
        setHiddenCal("calHidden");
      }
    } else {
      if (window.scrollY > 100) {
        setHiddenCal("calVisible");
      } else {
        setHiddenCal("calHidden");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showHiddenCal);
    return () => window.removeEventListener("scroll", showHiddenCal);
  }, []);

  // page down = true, page up = false
  const handlePage = (e) => {
    if (window.screen.width > 1439) {
      if (window.scrollY > 200) {
        if (e.deltaY > 0) {
          setIsPageDown("headerHidden");
          setIsPageDown2("");
        } else {
          setIsPageDown("headerVisible");
          setIsPageDown2("visible");
        }
      }
    } else if (window.screen.width > 1023 && window.screen.width <= 1439) {
      if (window.scrollY > 150) {
        if (e.deltaY > 0) {
          setIsPageDown("headerHidden");
          setIsPageDown2("");
        } else {
          setIsPageDown("headerVisible");
          setIsPageDown2("visible");
        }
      }
    } else {
      if (window.scrollY > 100) {
        if (e.deltaY > 0) {
          setIsPageDown("headerHidden");
          setIsPageDown2("");
        } else {
          setIsPageDown("headerVisible");
          setIsPageDown2("visible");
        }
      }
    }
  };
  useEffect(() => {
    window.addEventListener("mousewheel", handlePage);
    return () => window.removeEventListener("mousewheel", handlePage);
  }, []);

  const onClick = () => {
    getClickEvent(true);
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
  };

  const onClick2 = () => {
    getClickEvent3(true);
  };

  return (
    <HeaderDiv isClick={isClick} burgerClick={burgerClick}>
      <StyledHeader className={isPageDown}>
        <div className='maxwidth'>
          <h1>kakao</h1>
          <div>
            <FontAwesomeIcon
              onClick={onClick}
              type='button'
              icon={faMagnifyingGlass}
              size='2x'
              className='searchBtn'
            />
            <FontAwesomeIcon
              onClick={onClick2}
              type='button'
              icon={faBurger}
              size='2x'
            />
          </div>
        </div>
      </StyledHeader>
      <HiddenSec>
        <HiddenCalHeader id={isPageDown2} className={hiddenCal}>
          <ContentDiv>
            <HiddenCalImg imgnum={imgnum} />
            <HiddenCalStr>오늘의 카카오</HiddenCalStr>
          </ContentDiv>
        </HiddenCalHeader>
      </HiddenSec>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  position: ${({ isClick }) => (isClick ? "static" : "fixed")};
  z-index: 2;
  box-sizing: border-box;
  width: 100vw;
  margin: 0 auto;

  .headerVisible {
    top: 0px;
    transition: top 0.2s ease-in-out;
  }
  .headerHidden {
    top: -60px;
    transition: top 0.2s ease-in-out;
  }

  .maxwidth {
    display: flex;
    justify-content: space-between;
    width: 1296px;
    margin: 0 auto;
    @media screen and (max-width: 1439px) {
      max-width: 952px;
      margin: 0 auto;
    }
    @media screen and (max-width: 1023px) {
      max-width: 630px;
      margin: 0 auto;
    }
  }
`;
const StyledHeader = styled.div`
  display: flex;
  background-color: white;
  position: relative;
  align-items: center;
  padding-top: 18px;
  width: 100vw;
  height: 60px;
  margin: 0 auto;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;

  .searchBtn {
    margin-right: 24px;
  }
`;

const HiddenSec = styled.div`
  position: static;
  width: 100%;
  z-index: 4001;
  top: 0;

  .calVisible {
    visibility: visible;
    top: -60px;
    transition: top 0.2s ease-in-out;
  }
  .calHidden {
    visibility: hidden;
    top: 0px;
    transition: top 0.2s ease-in-out;
  }
  #visible {
    top: 0px;
    transition: top 0.2s ease-in-out;
  }
`;

const HiddenCalHeader = styled.div`
  position: relative;
  height: 72px;
  background-color: white;
  border-bottom: 1px solid #eee;
  width: 100%;
`;

const ContentDiv = styled.div`
  display: flex;
  align-content: center;
  padding: 18px 0px;
  box-sizing: border-box;
  max-width: 1296px;
  margin: 0px auto;
  @media screen and (max-width: 1439px) {
    max-width: 952px;
    margin: 0 auto;
  }
  @media screen and (max-width: 1032px) {
    max-width: 630px;
    margin: 0 auto;
  }
`;
const HiddenCalImg = styled.img`
  width: 36px;
  height: 36px;
  content: ${({ imgnum }) =>
    `url(https://www.kakaocorp.com/page/calendar/png/${imgnum}.png)` || 1};
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
