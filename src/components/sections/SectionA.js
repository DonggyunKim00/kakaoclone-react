import styled from "styled-components";
import LargeBox from "../sectionBox/LargeBox";
import MediumBox from "../sectionBox/MediumBox";
import SmallBox from "../sectionBox/SmallBox";
import dummy from "../../dummy/hashtag.json";

function SectionA() {
  return (
    <AllLayout>
      <SecLayout1>
        <LargeBox
          strongtxt="데이터센터 화재로 인한 서비스 장애 '피해 사례 접수' 종료 안내
          "
          hashtag={dummy.hasharr[0].item.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
      </SecLayout1>
      <SecLayout2>
        <InnerContaier>
          <MediumBox
            strongtxt='데이터센터 화재로 인한 카카오 대표 대국민 사과문'
            hashtag={dummy.hasharr[1].item.map((value, idx) => (
              <span key={idx}>{value}</span>
            ))}
          />
          <SmallBox
            imgurl='https://www.kakaocorp.com/page/ico_stock.png'
            spantxt='주가 정보'
            fontSize='40px'
            lineHeight='59px'
            strongtxt='100'
            hashtag={dummy.hasharr[2].item.map((value, idx) => (
              <span key={idx}>{value}</span>
            ))}
          />
          <SmallBox
            imgurl='https://www.kakaocorp.com/page/ico_responsible.png'
            spantxt='약속과 책임'
            strongtxt='ESG보고서, 카카오의 약속과 책임'
            hashtag={dummy.hasharr[3].item.map((value, idx) => (
              <span key={idx}>{value}</span>
            ))}
          />
          <TopPosition>
            <SmallBox
              imgurl='https://www.kakaocorp.com/page/ico_responsible.png'
              spantxt='약속과 책임'
              strongtxt='카카오는 당신과 함께 더 나은 세상을 만듭니다.'
              hashtag={dummy.hasharr[4].item.map((value, idx) => (
                <span key={idx}>{value}</span>
              ))}
            />
          </TopPosition>
        </InnerContaier>
      </SecLayout2>
    </AllLayout>
  );
}

export default SectionA;

const AllLayout = styled.div`
  display: flex;
  @media screen and (max-width: 1439px) {
    flex-wrap: wrap;
  }
`;
const SecLayout1 = styled.div`
  width: 666px;
  height: 1104px;
  padding: 0 18px;
  margin: 0px;
  box-sizing: border-box;
  @media screen and (max-width: 1439px) {
    max-width: 655px;
    padding: 0 15px;
    width: auto;
  }
  @media screen and (max-width: 1023px) {
    position: static;
    height: 800px;
  }
`;

const SecLayout2 = styled.div`
  width: 666px;
  height: 1104px;
  padding: 0 18px;
  margin: 0px;
  box-sizing: border-box;
  @media screen and (max-width: 1439px) {
    max-width: 327px;
    padding: 0 15px;
    width: auto;
  }
  @media screen and (max-width: 1023px) {
    max-width: 655px;
    padding: 0 15px;
    width: auto;
    height: auto;
  }
`;
const InnerContaier = styled.div`
  width: 630px;
  height: 648px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 0 18px;
  @media screen and (max-width: 1439px) {
    max-width: 327px;
    width: auto;
    padding: 0;
  }
  @media screen and (max-width: 1023px) {
    max-width: 655px;
    width: auto;
    padding: 0;
  }
`;
const TopPosition = styled.div`
  position: relative;
  top: -228px;
  @media screen and (max-width: 1439px) {
    position: static;
  }
  @media screen and (max-width: 1023px) {
    position: relative;
  }
`;
