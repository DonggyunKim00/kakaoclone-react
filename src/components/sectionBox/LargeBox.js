import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaEllipsisV } from "react-icons/fa";
import HeaderinBox from "../items/Headerinbox";
import StronginBox from "../items/Stronginbox";
import HashtaginBox from "../items/Hashtaginbox";
import OpenEllipse from "../onClickitem/OpenEllipse";

function LargeBox({ strongtxt, hashtag }) {
  const [ellipseHidden, setEllipseHidden] = useState(false);
  const [handleClass, setHandleClass] = useState("closeMenu");
  const [circlehandle1, setCircleHandle1] = useState("firstvalue1");
  const [circlehandle2, setCircleHandle2] = useState("firstvalue2");
  const [circlehandle3, setCircleHandle3] = useState("firstvalue3");
  const [isPageDown, setIsPageDown] = useState("headerHidden");

  // ellipse 클릭
  const onClick = () => {
    setEllipseHidden(true);
    setHandleClass("openMenu");
    setCircleHandle1("circle");
    setCircleHandle2("circle");
    setCircleHandle3("circle");
  };
  // X클릭 받아옴
  const getCloseClick = (ellipseHidden) => {
    setEllipseHidden(ellipseHidden);
    setHandleClass("closeMenu");
    setCircleHandle1("firstvalue1");
    setCircleHandle2("firstvalue2");
    setCircleHandle3("firstvalue3");
  };
  // page down = true, page up = false
  const handlePage = (e) => {
    if (window.scrollY > 100) {
      if (e.deltaY > 0) {
        setIsPageDown("headerHidden");
      } else {
        setIsPageDown("headerVisible");
      }
      // 부자연스러움
    } else if (window.scrollY < 150) {
      setIsPageDown("headerHidden");
    }
  };
  useEffect(() => {
    window.addEventListener("mousewheel", handlePage);
    return () => window.removeEventListener("mousewheel", handlePage);
  }, []);

  return (
    <>
      <Outer>
        <Lcontainer id={isPageDown}>
          <div className='innerflex'>
            <InfoSpan>
              <HeaderinBox text={"보도자료"} />
              {ellipseHidden ? (
                ""
              ) : (
                <div className='ellipse'>
                  <FaEllipsisV onClick={onClick} type='button' size='20' />
                </div>
              )}
              <StronginBox strongtxt={strongtxt} />
              <HashtaginBox hashtag={hashtag} />
            </InfoSpan>
            <div className={handleClass}>
              <OpenEllipse
                circlehandle1={circlehandle1}
                circlehandle2={circlehandle2}
                circlehandle3={circlehandle3}
                heightVlaue='700px'
                topValue='-230px'
                getCloseClick={getCloseClick}
              />
            </div>
          </div>
        </Lcontainer>
      </Outer>
    </>
  );
}
export default LargeBox;

const Outer = styled.div`
  position: sticky;
  top: 170px;
  height: 700px;
  @media screen and (max-width: 1439px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 1023px) {
    position: static;
  }
  #headerVisible {
    transform: translateY(60px);
    transition: all 0.2s ease-in-out;
  }
  #headerHidden {
    transform: translateY(0);
    transition: all 0.2s ease-in-out;
  }
`;
const Lcontainer = styled.div`
  .openMenu {
    visibility: visible;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }
  .closeMenu {
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }
  :hover {
    transform: translateY(-5px);
    border-radius: 14px;
    box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
    transition: all 0.3s ease;
  }

  .ellipse {
    color: #bbb;
    position: absolute;
    left: 588px;
  }
  .innerflex {
    display: flex;
    flex-direction: column;
    width: 630px;
    height: 700px;
    box-sizing: border-box;
    max-width: 666px;
    border-radius: 14px;
    box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
    background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/home/4d747862018400001.png?type=thumb&opt=C630x472.fwebp")
      no-repeat bottom;
  }
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;
