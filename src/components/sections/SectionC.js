import styled from "styled-components";
import SmallBox from "../sectionBox/SmallBox";
import dummy from "../../dummy/hashtag.json";

function SectionC() {
  return (
    <Outer>
      <DivWrap1>
        <SmallBox
          imgurl='https://www.kakaocorp.com/page/ico_customer.png'
          spantxt='고객센터'
          strongtxt='어떤 서비스를 도와드릴까요?'
          hashtag={dummy.hasharr[6].item.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
        <SmallBox
          imgurl='https://www.kakaocorp.com/page/ico_privacy.png'
          spantxt='카카오 프라이버시'
          strongtxt='데이터의 연결과 보호의 균형을 위한 카카오의 노력'
          hashtag={dummy.hasharr[7].item.map((value, idx) => (
            <span key={idx}>{value}</span>
          ))}
        />
      </DivWrap1>
    </Outer>
  );
}

export default SectionC;

const Outer = styled.div`
  width: 100%;
  height: 192px;
  @media screen and (max-width: 1439px) {
    height: 500px;
  }
`;

const DivWrap1 = styled.div`
  display: flex;
  width: 666px;
  height: 100%;
  padding: 0 18px;
  box-sizing: border-box;
  justify-content: space-between;
  @media screen and (max-width: 1439px) {
    max-width: 327px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
