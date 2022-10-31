import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { SiKakao } from "react-icons/si";
export default function OpenBurger({ getClickEvent4 }) {
  const onClick = () => {
    getClickEvent4(false);
  };
  return (
    <OuterDiv>
      <InnerDiv>
        <div className='header'>
          <SiKakao size='75' />
          <VscChromeClose onClick={onClick} type='button' size='28' />
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
  display: flex;
  justify-content: center;
  background-color: white;
  z-index: 99999;
  position: absolute;
  min-height: 100%;
  width: 100%;
  top: 0;
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
`;
