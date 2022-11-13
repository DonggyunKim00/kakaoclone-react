import styled from "styled-components";
import AdBox from "../sectionBox/AdBox";
import { BsArrowUp } from "react-icons/bs";
function SectionD() {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Outer>
        <AdBox
          strongtxt='사람과 기술로 일상을 돕는 카카오 서비스'
          spantxt='서비스 바로가기'
          backgroundColor='#fae100'
          imgurl='https://www.kakaocorp.com/page/bg_home_service.png'
          imgsize='160px 160px'
        ></AdBox>
        <AdBox
          strongtxt='세상 만사에 관심이 많다면, 당신은 이미 카카오 크루'
          spantxt='인재영입 바로가기'
          backgroundColor='#3c64ff'
          imgurl='https://www.kakaocorp.com/page/bg_home_recruit.png'
          imgsize='309px 160px'
        ></AdBox>
      </Outer>
      <LastSpanSec>카카오 소식 모아보기</LastSpanSec>
      <ButtonPosition>
        <TopButton>
          <BsArrowUp onClick={onClick} type='button' size='25' />
        </TopButton>
      </ButtonPosition>
    </>
  );
}
export default SectionD;

const Outer = styled.div`
  display: flex;
  margin-top: 36px;
  @media screen and (max-width: 1439px) {
    margin-top: 0;
  }
  @media screen and (max-width: 1023px) {
    flex-wrap: wrap;
  }
`;

const LastSpanSec = styled.a`
  display: block;
  width: 260px;
  height: 60px;
  margin: 84px auto 0;
  border-radius: 60px;
  font-size: 18px;
  line-height: 60px;
  background-color: #eee;
  text-align: center;
  @media screen and (max-width: 1023px) {
    margin-top: 48px;
  }
`;
const ButtonPosition = styled.div`
  position: relative;
  top: 130px;
  left: 1280px;
  @media screen and (max-width: 1439px) {
    left: 930px;
  }
  @media screen and (max-width: 1023px) {
    left: 305px;
  }
`;
const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: black;
  svg {
    color: white;
  }
`;
