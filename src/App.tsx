import styled from "styled-components";
import { GlobalStyles } from "./helpers/GlobalStyles";
import MainNav from "./components/Navbar/MainNav";
import BannerCarousel from "./components/HeroSection/BannerCarousel";
import BottomSection from "./components/ProductSection/BottomSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainWrapper>
        <MainNav />
        <BannerCarousel />
        <BottomSection />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  flex:1;
`;

export default App;
