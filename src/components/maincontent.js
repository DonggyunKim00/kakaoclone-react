import MainTitle from "./maintitle";
import SectionA from "./sections/sectionA";
import SectionB from "./sections/sectionB";
import SectionC from "./sections/sectionC";
import SectionD from "./sections/sectionD";
import styled from "styled-components";

const AllSec = styled.div`
  margin: 0 -18px;
  padding: 96px 0 0;
`;

function maincontent() {
  return (
    <div>
      <MainTitle />
      <AllSec>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
      </AllSec>
    </div>
  );
}

export default maincontent;
