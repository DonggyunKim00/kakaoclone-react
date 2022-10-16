import styled from "styled-components";
import HeaderinBox from "../items/Headerinbox";
import StronginBox from "../items/Stronginbox";
import HashtaginBox from "../items/Hashtaginbox";

const Lcontainer = styled.div`
  display: flex;
  width: 630px;
  height: 700px;
  box-sizing: border-box;
  max-width: 666px;
  flex-direction: column;
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
  min-height: 470px;
  background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a57a93cd018300001.png?type=thumb&opt=C630x472")
    no-repeat;
`;

function LargeBox({ strongtxt, hashtag }) {
  return (
    <div>
      <Lcontainer>
        <InfoSpan>
          <HeaderinBox text={"보도자료"} />
          <StronginBox strongtxt={strongtxt} />
          <HashtaginBox hashtag={hashtag} />
        </InfoSpan>
        <Img />
      </Lcontainer>
    </div>
  );
}

export default LargeBox;
