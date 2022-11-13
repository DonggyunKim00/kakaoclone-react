import styled from "styled-components";
import HeaderinBox from "../items/Headerinbox";
import StronginBox from "../items/Stronginbox";
import HashtaginBox from "../items/Hashtaginbox";

function SmallBox({
  imgurl,
  spantxt,
  strongtxt,
  hashtag,
  fontSize,
  lineHeight,
}) {
  return (
    <>
      <Scontainer>
        <InfoSpan>
          <HeaderinBox imgurl={imgurl} spantxt={spantxt} />
          <StronginBox
            spantxt={spantxt}
            fontSize={fontSize || "18px"}
            lineHeight={lineHeight || "28px"}
            strongtxt={strongtxt}
          />
          <HashtaginBox spantxt={spantxt} hashtag={hashtag} />
        </InfoSpan>
      </Scontainer>
    </>
  );
}

export default SmallBox;

const Scontainer = styled.div`
  width: 297px;
  height: 192px;
  box-sizing: border-box;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
  border-radius: 14px;
  @media screen and (max-width: 1439px) {
    margin-top: 30px;
  }
  :hover {
    transform: translateY(-5px);
    border-radius: 14px;
    box-shadow: 4px 12px 20px 6px rgb(0 0 0 / 18%);
    transition: all 0.3s ease;
  }
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;
