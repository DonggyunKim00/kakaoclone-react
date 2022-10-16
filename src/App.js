import styled from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./components/GlobalStyle";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";

const BodyDiv = styled.div`
  max-width: 1296px;
  margin: 0 auto;
`;

function App() {
  const time = new Date();
  let imgnum = time.getDate();
  return (
    <div>
      <GlobalStyle />
      <Header imgnum={imgnum} />
      <BodyDiv>
        <Maincontent imgnum={imgnum} />
        <Footer />
      </BodyDiv>
    </div>
  );
}

export default App;
