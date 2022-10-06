import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled.div`
  margin: 0px auto;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-bottom: 1px solid #eee;
`;

function header() {
  return (
    <StyledHeader>
      <h1>kakao</h1>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} size='2x' />
        <FontAwesomeIcon icon={faBurger} size='2x' />
      </div>
    </StyledHeader>
  );
}

export default header;
