import styled from "styled-components";

function Hashtaginbox({ hashtag }) {
  return (
    <div>
      <HashBox>{hashtag}</HashBox>
    </div>
  );
}

export default Hashtaginbox;

const HashBox = styled.div`
  display: inline-block;
  margin: 24px 0px;
  font-size: 14px;
  color: #6d6d6d;
`;
