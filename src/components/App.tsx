import React from "react";

import { Navigation, Hero, MainContainer, Container } from "./";

const App: React.FC = () => {
  return (
    <Container>
      <Navigation />
      <MainContainer>
        <Hero />
      </MainContainer>
    </Container>
  );
};

export default App;
