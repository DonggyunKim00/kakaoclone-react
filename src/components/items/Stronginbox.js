import styled from "styled-components";

function Stronginbox({ strongtxt, fontSize, lineHeight, spantxt, topValue }) {
  return (
    <OuterDiv topValue={topValue}>
      {spantxt === "고객센터" ? (
        <>
          <BeforeImg />
          <YellowBox>
            <Strong size={fontSize} lh={lineHeight}>
              {strongtxt}
            </Strong>
          </YellowBox>
        </>
      ) : (
        <Strong size={fontSize} lh={lineHeight}>
          {strongtxt}
        </Strong>
      )}
    </OuterDiv>
  );
}

export default Stronginbox;

const OuterDiv = styled.div`
  position: relative;
  margin: 13px 0 0;
  top: ${({ topValue }) => topValue};
`;
const Strong = styled.strong`
  max-height: 92px;
  height: 92px;
  font-size: ${(props) => props.size || "32px"};
  line-height: ${(props) => props.lh || "46px"};
  letter-spacing: -1px;
`;
const BeforeImg = styled.div`
  position: relative;
  top: 0;
  left: -5px;
  width: 18px;
  height: 18px;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 0c3.003 2.178 4.963 5.706 4.961 9.699V18H18C18 8.059 9.941 0 0 0' fill='%23fee102' fill-rule='evenodd'/%3E%3C/svg%3E");
`;
const YellowBox = styled.div`
  display: inline-block;
  overflow: visible;
  position: relative;
  height: auto;
  padding: 8px 20px 8px 25px;
  border-radius: 15px;
  font-size: 16px;
  line-height: 26px;
  color: #000;
  background-color: #fee102;
  top: -13px;
`;
