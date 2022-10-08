import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import Simage from "../myimages/simage";

const BeforeImg = styled.img`
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -5px;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 0c3.003 2.178 4.963 5.706 4.961 9.699V18H18C18 8.059 9.941 0 0 0' fill='%23eee' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const SpanBox = styled.span`
  display: inline-block;
  position: relative;
  top: -13px;
  left: 10px;
  border-radius: 13px;
  padding: 0 13px;
  font-size: 13px;
  line-height: 34px;
  background-color: #eee;
  margin-top: 1px;
`;

const FaSvg = styled.svg`
  position: relative;
  width: 20px;
  height: 20px;
  color: #bbb;
  top: -10px;
  left: 460px;
  margin: 0 auto;
`;

function headerinbox() {
  return (
    <div>
      <Simage
        imageurl={
          "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72"
        }
      />
      <SpanBox>
        <BeforeImg />
        보도자료
      </SpanBox>
      <FaSvg>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </FaSvg>
    </div>
  );
}

export default headerinbox;
