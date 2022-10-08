import styled from "styled-components";

const Scontainer = styled.div`
  width: 297px;
  height: 192px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

function smallBox() {
  return (
    <div>
      <Scontainer></Scontainer>
    </div>
  );
}

export default smallBox;
