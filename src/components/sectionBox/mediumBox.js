import styled from "styled-components";
import HeaderinBox from "../items/headerinbox";
import StronginBox from "../items/stronginbox";
import HashtaginBox from "../items/hashtaginbox";

const Mcontainer = styled.div`
  width: 297px;
  height: 420px;
  box-sizing: border-box;
  box-shadow: 2px 5px 40px 0 rgb(0 0 0 / 8%);
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;

const Img = styled.div`
  width: 100%;
  height: 223px;
  background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a094467d018300001.jpeg?type=thumb&opt=C630x472")
    no-repeat;
  background-size: contain;
`;

function mediumBox({ strongtxt, hashtag }) {
  return (
    <div>
      <Mcontainer>
        <InfoSpan>
          <HeaderinBox text={"보도자료"} />
          <StronginBox
            fontSize={"22px"}
            strongtxt={strongtxt}
            lineHeight={"32px"}
          />
          <HashtaginBox hashtag={hashtag} />
        </InfoSpan>
        <Img />
      </Mcontainer>
    </div>
  );
}

export default mediumBox;
