import { FaEllipsisV } from "react-icons/fa";
import { useState } from "react";
import styled from "styled-components";
import HeaderinBox from "../items/Headerinbox";
import StronginBox from "../items/Stronginbox";
import HashtaginBox from "../items/Hashtaginbox";
import OpenEllipse from "../onClickitem/OpenEllipse";

function MediumBox({ strongtxt, hashtag }) {
  const [ellipseHidden, setEllipseHidden] = useState(false);
  const [handleClass, setHandleClass] = useState("closeMenu");
  const [circlehandle1, setCircleHandle1] = useState("firstvalue1");
  const [circlehandle2, setCircleHandle2] = useState("firstvalue2");
  const [circlehandle3, setCircleHandle3] = useState("firstvalue3");
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
  return (
    <Outer>
      <Mcontainer>
        <div className='innerflex'>
          <InfoSpan>
            <HeaderinBox spantxt={"서비스 복구 현황"} />
            {ellipseHidden ? (
              ""
            ) : (
              <div className='ellipse'>
                <FaEllipsisV onClick={onClick} type='button' size='20' />
              </div>
            )}
            <StronginBox
              fontSize={"22px"}
              strongtxt={strongtxt}
              lineHeight={"32px"}
            />
            <HashtaginBox hashtag={hashtag} />
          </InfoSpan>
          <div className={handleClass}>
            <OpenEllipse
              heightVlaue='420px'
              topValue='-202px'
              getCloseClick={getCloseClick}
              circlehandle1={circlehandle1}
              circlehandle2={circlehandle2}
              circlehandle3={circlehandle3}
            />
          </div>
        </div>
      </Mcontainer>
    </Outer>
  );
}

export default MediumBox;
const Outer = styled.div`
  position: sticky;
  @media screen and (max-width: 1439px) {
    margin-top: 30px;
  }
  :hover {
    transform: translateY(-5px);
    border-radius: 14px;
    box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
    transition: all 0.3s ease;
  }
`;

const Mcontainer = styled.div`
  width: 297px;
  height: 420px;
  box-sizing: border-box;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 14px;
  background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/efc58d62018300001.png?type=thumb&opt=C630x472.fwebp")
    no-repeat bottom;
  background-size: contain;
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
  .innerflex {
    display: flex;
    flex-direction: column;
  }
  .ellipse {
    position: absolute;
    left: 260px;
    top: 35px;
    color: #bbb;
    z-index: 2000;
  }
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;
