import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { SiKakao } from "react-icons/si";
import { MdOutlineDarkMode } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";

export default function OpenBurger({ className, getClickEvent4 }) {
  const onClick = () => {
    getClickEvent4(false);
  };
  return (
    <OuterDiv className={className}>
      <InnerDiv>
        <div className='header'>
          <SiKakao size='75' />
          <VscChromeClose onClick={onClick} type='button' size='28' />
        </div>
        <div className='innerContent'>
          <ul>
            <li>
              <a href='#!'>
                <img
                  alt=''
                  src='https://t1.kakaocdn.net/thumb/R48x0.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2F65779d87017800001.png'
                />
                <span>카카오</span>
                <GoTriangleDown size='10' />
              </a>
            </li>
            <li className='margin'>
              <a href='#!'>
                <img
                  alt=''
                  src='https://t1.kakaocdn.net/thumb/R48x0.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2F657726a1017800001.png'
                />
                <span>뉴스</span>
              </a>
            </li>
            <li className='margin'>
              <a href='#!'>
                <img
                  alt=''
                  src='https://t1.kakaocdn.net/thumb/R48x0.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2F6575c56d017800001.png'
                />
                <span>기술과 서비스</span>
                <GoTriangleDown size='10' />
              </a>
            </li>
            <li className='margin'>
              <a href='#!'>
                <img
                  alt=''
                  src='https://t1.kakaocdn.net/thumb/R48x0.fwebp/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2F657759fa017800001.png'
                />
                <span>약속과 책임</span>
                <GoTriangleDown size='10' />
              </a>
            </li>
          </ul>
        </div>
        <div className='footer'>
          <ul>
            <li>
              <a href='#!'>투자정보</a>
            </li>
            <li>
              <a href='#!'>인재영입</a>
            </li>
            <li>
              <a href='#!'>고객센터</a>
              <AiOutlineDown size='9' />
            </li>
          </ul>
          <div className='util'>
            <MdOutlineDarkMode size='28' />
            <GrLanguage size='28' />
          </div>
        </div>
      </InnerDiv>
    </OuterDiv>
  );
}
const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 99999;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 412px;
  padding-bottom: 36px;
  box-sizing: border-box;
  margin: 0 auto;

  .innerContent {
    flex: 1;
    padding: 47px 0 66px;
    box-sizing: border-box;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .innerContent a {
    display: flex;
    align-items: center;
    height: 52px;
  }
  span {
    display: inline-block;
    margin-left: 16px;
    line-height: 52px;
    font-size: 36px;
    font-weight: 700;
    letter-spacing: -0.8px;
    align-items: center;
  }
  .innerContent svg {
    margin-left: 14px;
  }
  .margin {
    margin-top: 36px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
  }
  .footer ul {
    display: flex;
    align-items: center;
  }
  .footer li {
    margin-right: 25px;
  }
  .footer svg {
    margin-left: 5px;
  }
  .util {
    display: flex;
    justify-content: space-between;
    width: 80px;
  }
`;
