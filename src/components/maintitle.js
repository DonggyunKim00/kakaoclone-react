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
`;
const Texttit = styled.h3`
  display: flex;
  flex-direction: column;
`;
const StyledEm = styled.em`
  font-style: normal;
  padding-left: 84px;
`;
