import styled from "styled-components";

function Stronginbox({ strongtxt, fontSize, lineHeight }) {
  return (
    <OuterDiv>
      <Strong size={fontSize} lh={lineHeight}>
        {strongtxt}
      </Strong>
    </OuterDiv>
  );
}

export default Stronginbox;

const OuterDiv = styled.div`
  margin: 13px 0 0;
`;
const Strong = styled.strong`
  top: 40px;
  max-height: 92px;
  height: 92px;
  font-size: ${(props) => props.size || "32px"};
  line-height: ${(props) => props.lh || "46px"};
  letter-spacing: -1px;
`;
