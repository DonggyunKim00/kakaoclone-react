import styled from "styled-components";
import LargeBox from "../sectionBox/largeBox";
import MediumBox from "../sectionBox/mediumBox";
import SmallBox from "../sectionBox/smallBox";

const AllLayout = styled.div`
  display: flex;
`;
const SecLayout = styled.div`
  width: 630px;
  height: 1104px;
  padding: 0 18px;
  margin: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
const TopPosition = styled.div`
  position: relative;
  top: -228px;
`;

function sectionA() {
  return (
    <AllLayout>
      <SecLayout>
        <LargeBox
          text={"카카오, 'AI VOD 클래스'로 브런치 작가들의 창작 무대 확대"}
        />
      </SecLayout>
      <SecLayout>
        <MediumBox></MediumBox>
        <SmallBox></SmallBox>
        <MediumBox></MediumBox>
        <TopPosition>
          <MediumBox></MediumBox>
        </TopPosition>
        <SmallBox></SmallBox>
        <TopPosition>
          <SmallBox></SmallBox>
        </TopPosition>
      </SecLayout>
    </AllLayout>
  );
}

export default sectionA;
