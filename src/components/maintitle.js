import styled from "styled-components";
import TodayDate from "./items/TodayDate";

const Maintit = styled.div`
  padding-top: 96px;
  font-size: 46px;
  font-weight: 700;
  line-height: 66px;
  background: url("https://www.kakaocorp.com/page/calendar/light/ico_date${(
      props
    ) => props.imgnum || 1}.gif")
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
