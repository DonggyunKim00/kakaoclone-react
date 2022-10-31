import styled from "styled-components";

const MarginImg = styled.span`
  margin-right: 8px;
`;

function Simage({ imageurl }) {
  return (
    <MarginImg>
      <img src={imageurl} alt='' width='36' height='36' />
    </MarginImg>
  );
}

export default Simage;
