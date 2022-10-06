import styled from "styled-components";

const Scontainer = styled.div`
  width: 297px;
  height: 192px;
  background-color: green;
`;

function smallBox() {
  return (
    <div>
      <Scontainer></Scontainer>
    </div>
  );
}

export default smallBox;
