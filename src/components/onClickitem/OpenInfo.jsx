import styled from "styled-components";
export default function OpenInfo() {
  return (
    <>
      <InfoOpen></InfoOpen>
    </>
  );
}

const InfoOpen = styled.div`
  display: none;
  position: absolute;
  bottom: 30px;
  left: 0;
  padding: 16px 0;
  background: #eee;
  border-radius: 12px;
`;
