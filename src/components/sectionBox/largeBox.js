import styled from "styled-components";

const Lcontainer = styled.div`
  width: 630px;
  height: 700px;
  box-sizing: border-box;
  max-width: 666px;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Img = styled.img`
  width: 100%;
  min-height: 100%;
  background: url("https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/news/a57a93cd018300001.png?type=thumb&opt=C630x472")
    no-repeat;
  background-size: contain;
`;

const BeforeImg = styled.img`
  background: url(
    data:image/svg + xml;charset=utf-8,
    %3Csvgxmlns="http://www.w3.org/2000/svg"viewBox="0 0 18 18"%3E%3Cpathd="M0 0c3.003 2.178 4.963 5.706 4.961 9.699V18H18C18 8.059 9.941 0 0 0"fill="%23eee"fill-rule="evenodd"/%3E%3C/svg%3E
  );
`;

function largeBox(props) {
  return (
    <div>
      <Lcontainer>
        <span>
          <img
            src='https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72'
            width='36'
            height='36'
          />
        </span>
        <span>
          <BeforeImg />
        </span>
        <strong>{props.text}</strong>
        <Img />
      </Lcontainer>
    </div>
  );
}

export default largeBox;
