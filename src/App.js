import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import JonSnow from "./components/JonSnow";
import Cersei from "./components/Cersei";
import AriaStark from "./components/AriaStark";
import SandorClegane from "./components/SandorClegane";
import Nightking from "./components/NightKing";
import Margaery from "./components/Margaery";
import SansaStark from "./components/SansaStark";
import SirDavos from "./components/SirDavos";
import NedStark from "./components/NedStark";
import LittleFinger from "./components/LittleFinger";
import Dani from "./components/Dani";
import TyrionLannister from "./components/TyrionLannister";

const App = () => (
  <Wrapper>
    <Title>Game of Thrones Characters</Title>
    <JonSnow />
    <Cersei/>
    <AriaStark />
    <SandorClegane />
    <TyrionLannister/>
    <Margaery />
    <SirDavos />
    <Dani/>
    <SansaStark />
    <LittleFinger />
    <NedStark/>
    <NightKing />
  </Wrapper>
);

export default App;
