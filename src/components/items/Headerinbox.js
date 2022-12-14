import styled from "styled-components";
import Simage from "../myimages/Simage";

function Headerinbox({ imgurl, spantxt }) {
  return (
    <>
      <OuterFlex>
        <div className='height'>
          <Simage
            imageurl={
              imgurl ||
              "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/6562f7bc017800001.png?type=thumb&opt=C72x72"
            }
          />
          <SpanBox>
            <BeforeImg />
            {spantxt || "홈"}
          </SpanBox>
        </div>
      </OuterFlex>
    </>
  );
}

export default Headerinbox;
const OuterFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  .height {
    height: 36px;
  }
`;
const BeforeImg = styled.div`
  display: inline-block;
  position: absolute;
  top: 0px;
  left: -5px;
  width: 16px;
  height: 16px;
  background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18'%3E%3Cpath d='M0 0c3.003 2.178 4.963 5.706 4.961 9.699V18H18C18 8.059 9.941 0 0 0' fill='%23eee' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const SpanBox = styled.span`
  position: relative;
  display: inline-block;
  top: -10px;
  border-radius: 13px;
  padding: 0 13px;
  font-size: 13px;
  line-height: 34px;
  background-color: #eee;
`;
