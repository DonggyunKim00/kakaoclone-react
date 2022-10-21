import styled from "styled-components";
import Stronginbox from "../items/Stronginbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function XlargeBox({ strongtxt }) {
  return (
    <div>
      <XLcontainer>
        <Stronginbox fontSize={"42px"} strongtxt={strongtxt} />
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
`;
