import styled from "styled-components";

const Strong = styled.strong`
  top: 40px;
  max-height: 92px;
  height: 92px;
  margin-top: 13px;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: -1px;
`;

function stronginbox({ text }) {
  return (
    <div>
      <Strong>{text}</Strong>
    </div>
  );
}

export default stronginbox;
