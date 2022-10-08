import styled from "styled-components";
import HeaderinBox from "../items/headerinbox";
import StronginBox from "../items/stronginbox";

const Lcontainer = styled.div`
  display: flex;
  width: 630px;
  height: 700px;
  box-sizing: border-box;
  max-width: 666px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const InfoSpan = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 25px 24px 0;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 100%;
  min-height: 470px;
  background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a57a93cd018300001.png?type=thumb&opt=C630x472")
    no-repeat;
`;

const HashBox = styled.span`
  margin: 24px 100px;
  font-size: 14px;
  display: flex;
  color: #6d6d6d;
`;

function largeBox({ hashtag }) {
  return (
    <div>
      <Lcontainer>
        <InfoSpan>
          <HeaderinBox />
          <StronginBox
            text={"카카오, 'AI VOD 클래스'로 브런치 작가들의 창작 무대 확대"}
          />
          <div>
            <HashBox>{hashtag}</HashBox>
          </div>
        </InfoSpan>
        <Img />
      </Lcontainer>
    </div>
  );
}

export default largeBox;
