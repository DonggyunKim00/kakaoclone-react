import styled from "styled-components";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

function Footer({ screenWidth }) {
  const [isClick, setClick] = useState(false);

  const onClick = () => {
    setClick((curr) => !curr);
  };
  return (
    <>
      <FooterSec>
        <InnerWrapper>
          <ServiceWrapper>
            <ServiceList>
              <strong>
                카카오 {screenWidth < 1024 && <MdOutlineKeyboardArrowUp />}
              </strong>
              <ul>
                <li>카카오 문화</li>
                <li>공동체</li>
                <li>히스토리</li>
              </ul>
            </ServiceList>
            <ServiceList>
              <strong>
                뉴스 {screenWidth < 1024 && <MdKeyboardArrowRight />}
              </strong>
            </ServiceList>
            <ServiceList>
              <strong>
                기술과 서비스
                {screenWidth < 1024 && <MdOutlineKeyboardArrowUp />}
              </strong>
              <ul>
                <li>기술</li>
                <li>서비스</li>
              </ul>
            </ServiceList>
            <ServiceList>
              <strong>
                약속과 책임 {screenWidth < 1024 && <MdOutlineKeyboardArrowUp />}
              </strong>
              <ul>
                <li>ESG</li>
                <li>소셜임팩트</li>
                <li>디지털 관리</li>
                <li>AI 윤리</li>
              </ul>
            </ServiceList>
            <ServiceList>
              <strong>
                투자정보 {screenWidth < 1024 && <MdOutlineKeyboardArrowUp />}
              </strong>
              <ul>
                <li>기업지배구조</li>
                <li>주가정보</li>
                <li>재무정보</li>
                <li>IR행사</li>
                <li>공시정보</li>
                <li>공고</li>
              </ul>
            </ServiceList>
            <ServiceList className='padding'>
              <strong>
                고객센터 {screenWidth < 1024 && <MdOutlineKeyboardArrowUp />}
              </strong>
              <ul>
                <li>
                  카카오 고객센터 <FiArrowUpRight size='13' />
                </li>
                <li>
                  Daum 고객센터 <FiArrowUpRight size='13' />
                </li>
              </ul>
              <strong className='margintop'>
                인재영입 <FiArrowUpRight size='13' />
              </strong>
              <strong className='margintop'>
                카카오계정 <FiArrowUpRight size='13' />
              </strong>
            </ServiceList>
          </ServiceWrapper>
          <RelationWrapper>
            <div className='groupinfo'>
              <div onClick={onClick}>
                이용약관
                {isClick ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              <div>
                <span className='fontweight'>위치기반서비스이용약관</span>
                {isClick ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              <div>
                <span className='fontweight'>개인정보처리방침</span>
                {isClick ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              <div>운영정책</div>
              <div>
                청소년보호정책
                {isClick ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              <div>브랜드보호정책</div>
              <div>권리침해신고안내</div>
              <div>
                공지사항
                {isClick ? (
                  <MdOutlineKeyboardArrowUp />
                ) : (
                  <MdOutlineKeyboardArrowDown />
                )}
              </div>
              <div>사이버윤리실</div>
              <div>Contact Us</div>
            </div>
            <div className='relatepage'>
              <strong>
                <span>
                  관련사이트
                  {isClick ? (
                    <GrClose size='14' />
                  ) : (
                    <AiOutlinePlus size='14' />
                  )}
                </span>
              </strong>
            </div>
            <div className='copyright'>© Kakao Corp. All rights reserved.</div>
          </RelationWrapper>
        </InnerWrapper>
      </FooterSec>
    </>
  );
}

export default Footer;

const FooterSec = styled.section`
  border-top: 1px solid #ebebeb;
  @media screen and (max-width: 1023px) {
    border: 0;
  }
`;

const InnerWrapper = styled.div`
  max-width: 1296px;
  margin: 0 auto;
  padding: 37px 0 48px;
  @media screen and (max-width: 1439px) {
    max-width: 952px;
    padding-top: 36px;
  }
  @media screen and (max-width: 1023px) {
    max-width: 630px;
    padding-top: 0;
  }
  ul {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  li {
    margin-top: 12px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: #888;
  }
  svg {
    position: relative;
    top: 1px;
  }
`;

const ServiceWrapper = styled.div`
  height: 219px;
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    border-top: 1px solid #e6e6e6;
    height: auto;
  }
  .padding {
    @media screen and (max-width: 1023px) {
      padding-bottom: 0;
    }
  }
`;
const ServiceList = styled.div`
  float: left;
  width: 16.666%;
  .margintop {
    display: block;
    margin-top: 36px;
    @media screen and (max-width: 1023px) {
      border-top: 1px solid #e6e6e6;
      padding: 13px 0;
      margin: 0;
    }
  }
  svg {
    @media screen and (max-width: 1023px) {
      float: right;
      margin-right: 12px;
      color: #888;
    }
  }
  @media screen and (max-width: 1023px) {
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    padding: 13px 0;
  }
  ul {
    @media screen and (max-width: 1023px) {
      border-top: 1px solid #e6e6e6;
      padding: 13px 0;
      margin-bottom: 0;
    }
  }
  li > svg {
    @media screen and (max-width: 1023px) {
      float: none;
    }
  }
`;
const RelationWrapper = styled.div`
  margin-top: 120px;
  .groupinfo {
    float: left;
    display: flex;
    @media screen and (max-width: 1439px) {
      width: 532px;
      height: 43px;
      flex-wrap: wrap;
    }
    @media screen and (max-width: 1023px) {
      display: flex;
      flex-wrap: wrap;
      float: none;
      width: 630px;
      height: 167.5px;
    }
  }
  @media screen and (max-width: 1023px) {
    margin-top: 45px;
  }
  .groupinfo > div {
    font-size: 12px;
    letter-spacing: -0.2px;
    color: #888;
    margin-right: 24px;
    svg {
      position: relative;
      top: 2px;
    }
    .fontweight {
      font-weight: 700;
      color: #333;
    }
    @media screen and (max-width: 1023px) {
      margin-top: 15px;
      margin-right: 0;
      width: 50%;
    }
  }

  .relatepage {
    float: right;
    position: relative;
    width: 208px;
    @media screen and (max-width: 1439px) {
      width: 298px;
    }
    @media screen and (max-width: 1023px) {
      top: 42px;
    }
    span {
      display: block;
      padding: 10px 20px 12px;
      background: #eee;
      border-radius: 24px;
      font-size: 12px;
      font-weight: 400;
      color: #111;
      line-height: 18px;
      letter-spacing: -0.2px;
      svg {
        float: right;
        margin-top: 1.5px;
      }
    }
  }
  .copyright {
    display: block;
    font-size: 12px;
    color: #888;
    clear: both;
    @media screen and (max-width: 1439px) {
      padding-top: 12px;
    }
  }
`;
