import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function XlargeBox({ screenWidth }) {
  return (
    <div>
      <XLcontainer>
        <strong className='str'>
          기술과 사람으로 {screenWidth <= 1023 && <br />}더 나은 세상을
          만듭니다.
        </strong>
        <CultureBtn>
          카카오문화 바로가기
          <FaArrow>
            <FontAwesomeIcon icon={faArrowRight} />
          </FaArrow>
        </CultureBtn>
        <Img />
      </XLcontainer>
    </div>
  );
}

export default XlargeBox;

const XLcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 540px;
  margin: 36px 18px;
  padding: 54px 66px 0;
  border-radius: 14px;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  box-sizing: border-box;
  .str {
    display: block;
    font-size: 42px;
    line-height: 62px;
    color: #000;
    @media screen and (max-width: 1023px) {
      font-size: 36px;
      line-height: 52px;
      text-align: center;
    }
  }
  @media screen and (max-width: 1439px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1023px) {
    height: auto;
    margin-top: 36px;
    padding: 48px 52px 38px;
  }
`;
const CultureBtn = styled.a`
  width: 176px;
  height: 33px;
  margin-top: 36px;
  padding: 9px 20px 0;
  border-radius: 42px;
  line-height: 20px;
  color: #fff;
  box-sizing: border-box;
  background-color: #000;
  @media screen and (max-width: 1023px) {
    margin-top: 24px;
  }
`;
const FaArrow = styled.svg`
  width: 15px;
  height: 15px;
  margin: 1px 0 0 6px;
  vertical-align: top;
`;
const Img = styled.div`
  width: 900px;
  height: 240px;
  margin: 50px auto 0;
  background: url("https://www.kakaocorp.com/page/bg_home_culture_210325.png")
    no-repeat;
  background-size: contain;
  @media screen and (max-width: 1023px) {
    background: url("https://www.kakaocorp.com/page/bg_home_culture_s_210325.png")
      no-repeat;
    margin-top: 44px 53px 0;
    background-size: contain;
    width: 420px;
    height: 420px;
  }
`;
