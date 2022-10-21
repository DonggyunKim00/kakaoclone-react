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
    <div>
      <Scontainer>
        <InfoSpan>
          <HeaderinBox imgurl={imgurl} spantxt={spantxt} />
          <StronginBox
            fontSize={fontSize || "18px"}
            lineHeight={lineHeight || "28px"}
            strongtxt={strongtxt}
          />
          <HashtaginBox hashtag={hashtag} />
        </InfoSpan>
        {/* <Img /> */}
      </Scontainer>
    </div>
  );
}

export default SmallBox;

const Scontainer = styled.div`
  width: 297px;
  height: 192px;
  box-sizing: border-box;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;

// const Img = styled.img`
//   width: 100%;
//   min-height: 470px;
//   background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a57a93cd018300001.png?type=thumb&opt=C630x472")
//     no-repeat;
// `;
