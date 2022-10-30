import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { SiKakao } from "react-icons/si";
export default function OpenBurger() {
  return (
    <OuterDiv>
      <InnerDiv>
        <div className='header'>
          <SiKakao className='logo' size='75' />
          <VscChromeClose className='closeBtn' type='button' size='28' />
        </div>
        <div className='innerContent'>
          <ul>
            <li>
              <a>카카오</a>
            </li>
            <li>
              <a>뉴스</a>
            </li>
            <li>
              <a>기술과 서비스</a>
            </li>
            <li>
              <a>약속과 책임</a>
            </li>
          </ul>
        </div>
        <div className='footer'>
          <ul>
            <li>
              <a>투자정보</a>
            </li>
            <li>
              <a>인재영입</a>
            </li>
            <li>
              <a>고객센터</a>
            </li>
          </ul>
        </div>
      </InnerDiv>
    </OuterDiv>
  );
}
const OuterDiv = styled.div`
  background-color: white;
  z-index: 99999;
  position: absolute;
  width: 100%;
  top: 0;
  height: 100vh;
`;

const InnerDiv = styled.div`
  display: flex;
  position: relative;
  max-width: 412px;
  height: 100%;
  padding-bottom: 36px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
