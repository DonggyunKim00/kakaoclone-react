import styled from "styled-components";

const MarginImg = styled.span`
  margin-right: 8px;
`;

function simage({ imageurl }) {
  return (
    <MarginImg>
      <img src={imageurl} alt='' width='36' height='36' />
    </MarginImg>
  );
}

export default simage;
