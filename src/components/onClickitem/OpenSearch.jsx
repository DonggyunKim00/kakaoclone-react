import styled from "styled-components";
import dummy from "../../dummy/hashtag.json";
import { VscChromeClose } from "react-icons/vsc";
import { SiKakao } from "react-icons/si";
import { BiSearch } from "react-icons/bi";

export default function OpenSearch({ className, getClickEvent2 }) {
  const onClick = () => {
    getClickEvent2(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className={className}>
      <OuterSec />
      <InnerLayer>
        <div className='header'>
          <SiKakao className='logo' size='75' />
          <VscChromeClose
            className='closeBtn'
            onClick={onClick}
            type='button'
            size='28'
          />
        </div>
        <div className='content'>
          <form>
            <BiSearch className='icon' size='28' />
            <input type='text' placeholder='무엇이 궁금하신가요?' />
          </form>
          <TagBox>
            {dummy.hasharr[5].item.map((value, idx) => (
              <SpanBox key={idx}>
                <a href='/'>{value}</a>
              </SpanBox>
            ))}
          </TagBox>
        </div>
      </InnerLayer>
    </div>
  );
}

const OuterSec = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  content: "";
  z-index: 4000;
  opacity: 0.9;
  top: 0;
  @media screen and (max-width: 1439px) {
    margin: 0 auto;
  }
`;

const InnerLayer = styled.div`
  position: absolute;
  background-color: white;
  margin-bottom: -190px;
  z-index: 4001;
  width: 100%;
  top: 0;
  @media screen and (max-width: 1439px) {
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1296px;
    margin: 0 auto;
    height: 72px;
    background-color: white;
    @media screen and (max-width: 1439px) {
      max-width: 952px;
    }
    @media screen and (max-width: 1023px) {
      max-width: 630px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1296px;
    margin: 0 auto;
    padding: 120px 0;
    background: url(https://www.kakaocorp.com/page/bg_search.png) no-repeat top
      96px right 50px;
    background-size: 162px 178px;
    opacity: 1;
    @media screen and (max-width: 1439px) {
      max-width: 952px;
      padding: 96px 0;
      background-position: top 72px right 20px;
      background-size: 132px 146px;
    }
    @media screen and (max-width: 1023px) {
      max-width: 630px;
      padding: 84px 0;
      background-position: top 78px right;
      background-size: 96px 106px;
    }
  }

  form {
    display: flex;
    justify-content: center;
  }
  .icon {
    position: relative;
    left: 50px;
    top: 22px;
    color: white;
  }
  input {
    width: 100%;
    padding: 18px 24px 18px 60px;
    font-size: 22px;
    letter-spacing: -0.6px;
    border: none;
    line-height: 32px;
    font-weight: 700;
    box-sizing: border-box;
    width: 823px;
    height: 72px;
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='823' height='72'%3E%3Cg transform='rotate(180 411.5 36)' fill='%23333' fill-rule='evenodd'%3E%3Cpath d='M0 0c4.004 2.904 6.617 7.607 6.615 12.931V24H24C24 10.745 13.255 0 0 0'/%3E%3Crect width='816' height='72' x='6.5' rx='27'/%3E%3C/g%3E%3C/svg%3E")
      no-repeat;
    color: white;
    @media screen and (max-width: 1439px) {
      max-width: 600px;
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='60'%3E%3Cg transform='rotate(180 300 30)' fill='%23333' fill-rule='evenodd'%3E%3Cpath d='M0 0c3.336 2.42 5.514 6.34 5.513 10.776V20H20C20 8.954 11.046 0 0 0'/%3E%3Crect width='594' height='60' x='5.5' rx='23'/%3E%3C/g%3E%3C/svg%3E")
        no-repeat;
    }
    // ?????
    @media screen and (max-width: 1023px) {
      background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='60'%3E%3Cg transform='rotate(180 225 30)' fill='%23333' fill-rule='evenodd'%3E%3Cpath d='M0 0c3.336 2.42 5.514 6.34 5.513 10.776V20H20C20 8.954 11.046 0 0 0'/%3E%3Crect width='444' height='60' x='5.5' rx='23'/%3E%3C/g%3E%3C/svg%3E")
        no-repeat;
    }
  }
  &:focus {
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: white;
  }
`;
const TagBox = styled.div`
  margin: 30px auto 0;
  @media screen and (max-width: 1439px) {
    max-width: 446px;
  }
`;

const SpanBox = styled.span`
  display: inline-block;
  border-radius: 13px;
  padding: 0 13px;
  font-size: 13px;
  line-height: 34px;
  background-color: #eee;
  margin-right: 6px;
  max-width: 600px;
`;
