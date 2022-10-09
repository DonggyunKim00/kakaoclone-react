import styled from "styled-components";
import LargeBox from "../sectionBox/largeBox";
import MediumBox from "../sectionBox/mediumBox";
import SmallBox from "../sectionBox/smallBox";

const AllLayout = styled.div`
  display: flex;
`;
const SecLayout = styled.div`
  width: 630px;
  height: 763px;
  padding: 0 18px;
  margin: 0px;
`;
const InnerContaier = styled.div`
  width: 630px;
  height: 648px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: space-between;
  padding: 0 18px;
`;
const TopPosition = styled.div`
  position: relative;
  top: -228px;
`;

const hasharr1 = ["#브런치 ", "#브런치북 ", "#브런치 AI VOD 클래스"];
const hasharr2 = ["#카카오메이커스 ", "#카카오브레인 "];
const hasharr3 = ["2022.10.09 15:04PM"];
const hasharr4 = ["#2021년성과 ", "#ESG보고서 "];
const hasharr5 = ["#약속과책임 ", "#esg ", "#소셜임팩트 "];

function sectionA() {
  return (
    <AllLayout>
      <SecLayout>
        <LargeBox
          strongtxt={"카카오, 'AI VOD 클래스'로 브런치 작가들의 창작 무대 확대"}
          hashtag={hasharr1.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
      </SecLayout>
      <InnerContaier>
        <MediumBox
          strongtxt={"카카오메이커스-카카오브레인'세계 동물..."}
          hashtag={hasharr2.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
        <SmallBox
          imgurl={"https://www.kakaocorp.com/page/ico_stock.png"}
          spantxt={"주가 정보"}
          fontSize={"40px"}
          lineHeight={"59px"}
          strongtxt={"50,900"}
          hashtag={hasharr3.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
        <SmallBox
          imgurl={"https://www.kakaocorp.com/page/ico_responsible.png"}
          spantxt={"약속과 책임"}
          strongtxt={"ESG보고서, 카카오의 약속과 책임"}
          hashtag={hasharr4.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
        <TopPosition>
          <SmallBox
            imgurl={"https://www.kakaocorp.com/page/ico_responsible.png"}
            spantxt={"약속과 책임"}
            strongtxt={"카카오는 당신과 함께 더 나은 세상을 만듭니다."}
            hashtag={hasharr5.map((value, idx) => (
              <span key={idx}>{value}</span>
            ))}
          />
        </TopPosition>
      </InnerContaier>
    </AllLayout>
  );
}

export default sectionA;
