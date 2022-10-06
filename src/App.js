import Header from "./components/header";
import GlobalStyle from "./components/GlobalStyle";
import Maincontent from "./components/maincontent";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
