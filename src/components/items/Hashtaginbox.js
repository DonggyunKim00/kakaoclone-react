import styled from "styled-components";
function Hashtaginbox({ hashtag, spantxt, topValue }) {
  return (
    <Outer topValue={topValue}>
      {spantxt === "고객센터" ? (
        <FooterBox>
          <ul>
            <li>
              <SpanBox>{hashtag[0]}</SpanBox>
            </li>
            <li>
              <SpanBox>{hashtag[1]}</SpanBox>
            </li>
            <li>
              <SpanBox>{hashtag[2]}</SpanBox>
            </li>
          </ul>
        </FooterBox>
      ) : (
        <HashBox>{hashtag}</HashBox>
      )}
    </Outer>
  );
}

export default Hashtaginbox;
const Outer = styled.div`
  position: relative;
  top: ${({ topValue }) => topValue};
`;
const FooterBox = styled.div`
  ul {
    display: flex;
    margin-top: 12px;
    justify-content: center;
  }
  li {
    margin: 0 5px;
  }
`;
const SpanBox = styled.span`
  position: relative;
  display: inline-block;
  top: -10px;
  border-radius: 13px;
  padding: 0 20px;
  font-size: 16px;
  line-height: 42px;
  color: #666;
  background-color: #eee;
  height: 42px;
`;
const HashBox = styled.div`
  display: inline-block;
  margin: 24px 0px;
  font-size: 14px;
  color: #6d6d6d;
`;
