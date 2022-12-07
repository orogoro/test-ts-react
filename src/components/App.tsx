import React from "react";

import {
  Navigation,
  Hero,
  MainContainer,
  Container,
  Slider,
  Conversion,
} from "./";

const App: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <Hero />
        <Slider />
        <Conversion />
      </MainContainer>
    </Container>
  );
};

export default App;
