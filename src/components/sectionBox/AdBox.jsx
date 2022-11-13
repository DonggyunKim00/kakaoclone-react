import styled from "styled-components";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
function AdBox({ strongtxt, spantxt, backgroundColor, imgurl, imgsize }) {
  return (
    <Outer backgroundColor={backgroundColor}>
      <div className='color'>
        <Wrapper imgsize={imgsize} imgurl={imgurl}>
          <a href='#!'>
            <strong className='strongDiv'>{strongtxt}</strong>
            <span className='spanBox'>
              {spantxt}
              {spantxt === "서비스 바로가기" ? (
                <BsArrowRight />
              ) : (
                <BsArrowUpRight />
              )}
            </span>
          </a>
        </Wrapper>
      </div>
    </Outer>
  );
}

export default AdBox;
const Outer = styled.div`
  display: inline - block;
  width: 50%;
  padding: 0 18px;
  box-sizing: border-box;
  @media screen and (max-width: 1023px) {
    width: 100%;
    padding-bottom: 36px;
  }
  .color {
    background-color: ${({ backgroundColor }) => backgroundColor}; // color prop
    border-radius: 12px;
  }
  .strongDiv {
    display: block;
    max-width: 430px;
    font-size: 32px;
    line-height: 44px;
    color: #000;
    word-break: keep-all;
  }
  .spanBox {
    display: inline-block;
    height: 33px;
    margin-top: 24px;
    padding: 9px 20px 0;
    border-radius: 42px;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    background-color: #000;
    vertical-align: top;
    svg {
      position: relative;
      top: 2px;
    }
  }
`;

const Wrapper = styled.div`
  display: block;
  height: 360px;
  padding: 36px 36px 0;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 4px 12px 30px 6px rgb(0 0 0 / 9%);
  background: ${({ imgurl }) => `url(${imgurl}) no-repeat
    calc(100% - 40px) calc(100% - 40px)`}; // 이미지가 undefined라고 나옴 ㅠ
  background-size: ${({ imgsize }) => imgsize}; // size prop
`;
