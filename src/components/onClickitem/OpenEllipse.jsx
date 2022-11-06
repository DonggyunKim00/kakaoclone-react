import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillChatFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";

export default function OpenEllipse() {
  return (
    <Outer>
      <ul>
        <li>
          <circle>
            <BsFillChatFill size='15' />
          </circle>
        </li>
        <li>
          <circle>
            <FaFacebookF size='15' />
          </circle>
        </li>
        <li>
          <circle>
            <BsTwitter size='15' />
          </circle>
        </li>
        <li>
          <circle>
            <BsLink45Deg size='15' />
          </circle>
        </li>
      </ul>
      <VscChromeClose type='button' size='24' />
    </Outer>
  );
}

const Outer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 30;
  opacity: 1;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.55);
`;
