import styled from "styled-components";

const Mcontainer = styled.div`
  width: 297px;
  height: 420px;
  background-color: red;
`;

function mediumBox() {
  return (
    <div>
      <Mcontainer></Mcontainer>
    </div>
  );
}

export default mediumBox;
