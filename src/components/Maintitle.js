import styled from "styled-components";
import TodayDate from "./items/TodayDate";

function Maintitle({ imgnum }) {
  return (
    <div>
      <Maintit imgnum={imgnum}>
        <Texttit>
          <StyledEm>오늘의 카카오</StyledEm>
          <TodayDate />
        </Texttit>
      </Maintit>
    </div>
  );
}
export default Maintitle;

const Maintit = styled.div`
  padding-top: 96px;
  font-size: 46px;
  font-weight: 700;
  line-height: 66px;
  background: ${({ imgnum }) =>
      `url(https://www.kakaocorp.com/page/calendar/png/${imgnum}.png)` || 1}
    no-repeat 0 94px;
  background-size: 72px 72px;
  letter-spacing: -1px;
  @media screen and (max-width: 1439px) {
    padding-top: 72px;
    font-size: 36px;
    line-height: 52px;
    background-position-y: 72px;
    background-size: 56px 56px;
  }
  @media screen and (max-width: 1023px) {
    padding-top: 48px;
    font-size: 30px;
    line-height: 40px;
    background-position-y: 48px;
    background-size: 40px 40px;
    max-width: 630px;
    margin: auto;
  }
`;
const Texttit = styled.h3`
  display: flex;
  flex-direction: column;
`;
const StyledEm = styled.em`
  font-style: normal;
  padding-left: 84px;
  @media screen and (max-width: 1439px) {
    padding-left: 68px;
  }
  @media screen and (max-width: 1439px) {
    padding-left: 50px;
  }
`;
