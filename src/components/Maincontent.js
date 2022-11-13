import MainTitle from "./Maintitle";
import SectionA from "./sections/SectionA";
import SectionB from "./sections/SectionB";
import SectionC from "./sections/SectionC";
import SectionD from "./sections/SectionD";
import styled from "styled-components";

function Maincontent({ imgnum, className, screenWidth }) {
  return (
    <MainCont className={className}>
      <MainTitle imgnum={imgnum} />
      <AllSec>
        <SectionA />
        <SectionB screenWidth={screenWidth} />
        <SectionC />
        <SectionD />
      </AllSec>
    </MainCont>
  );
}
export default Maincontent;
const MainCont = styled.div`
  padding-top: 96px;
  @media screen and (max-width: 1439px) {
    padding-top: 72px;
  }
  @media screen and (max-width: 1023px) {
    padding-top: 48px;
  }
`;
const AllSec = styled.div`
  margin: 0 -18px;
  padding: 96px 0 0;
  padding-bottom: 182px;
  @media screen and (max-width: 1023px) {
    margin: 0px;
    padding: 12px 0 0;
    padding-bottom: 172px;
    max-width: 660px;
  }
`;
