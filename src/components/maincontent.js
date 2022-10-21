import MainTitle from "./Maintitle";
import SectionA from "./sections/SectionA";
import SectionB from "./sections/SectionB";
import SectionC from "./sections/SectionC";
import SectionD from "./sections/SectionD";
import styled from "styled-components";

function Maincontent({ className, imgnum }) {
  return (
    <div className={className}>
      <MainTitle imgnum={imgnum} />
      <AllSec>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
      </AllSec>
    </div>
  );
}
export default Maincontent;

const AllSec = styled.div`
  margin: 0 -18px;
  padding: 96px 0 0;
`;
