import styled from "styled-components";

const Maintit = styled.div`
  padding-top: 96px;
  font-size: 46px;
  font-weight: 700;
  line-height: 66px;
  background: url("https://www.kakaocorp.com/page/calendar/light/ico_date4.gif")
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

function maintitle() {
  return (
    <div>
      <Maintit>
        <Texttit>
          <StyledEm>오늘의 카카오</StyledEm>
          <span>10월 4일 화요일 소식입니다.</span>
        </Texttit>
      </Maintit>
    </div>
  );
}

export default maintitle;
