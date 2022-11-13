import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLink45Deg, BsFillChatFill } from "react-icons/bs";

export default function OpenEllipse({
  getCloseClick,
  topValue,
  heightVlaue,
  circlehandle1,
  circlehandle2,
  circlehandle3,
}) {
  const onClick = () => {
    getCloseClick(false);
  };

  return (
    <Outer heightVlaue={heightVlaue} topValue={topValue}>
      <ul>
        <li>
          <VscChromeClose
            className='closeBtn'
            onClick={onClick}
            type='button'
            size='24'
          />
        </li>
        <li>
          <Circle>
            <BsFillChatFill size='15' />
          </Circle>
        </li>
        <li>
          <Circle top='-50px' className={circlehandle1}>
            <FaFacebookF size='15' />
          </Circle>
        </li>
        <li>
          <Circle top='-95px' className={circlehandle2}>
            <BsTwitter size='15' />
          </Circle>
        </li>
        <li>
          <Circle top='-140px' className={circlehandle3}>
            <BsLink45Deg size='15' />
          </Circle>
        </li>
      </ul>
    </Outer>
  );
}

const Outer = styled.div`
  display: flex;
  justify-content: end;
  position: relative;
  width: 100%;
  height: ${({ heightVlaue }) => heightVlaue};
  top: ${({ topValue }) => topValue};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.55);

  ul {
    position: relative;
    top: 12px;
    right: 12px;
  }
  li {
    position: relative;
    margin-bottom: 10px;
  }
  svg {
    position: relative;
    left: 10px;
    top: 10px;
    color: #333;
  }
  .closeBtn {
    position: relative;
    color: white;
    left: 7px;
    margin-bottom: 5px;
  }
  // circle의 첫번째 위치를 모아둠
  .firstvalue1 {
    top: -50px;
    transition: all 0.2s ease-in-out;
  }
  .firstvalue2 {
    top: -95px;
    transition: all 0.2s ease-in-out;
  }
  .firstvalue3 {
    top: -140px;
    transition: all 0.2s ease-in-out;
  }
  // top 0 으로 위치를 원래대로
  .circle {
    position: relative;
    top: 0;
    transition: all 0.2s ease-in-out;
  }
`;

const Circle = styled.div`
  display: inline-block;
  position: relative;
  border-radius: 18px;
  width: 36px;
  height: 36px;
  background-color: white;
  top: ${(top) => top};
`;
