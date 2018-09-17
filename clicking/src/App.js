import Counter from "./components/Counter";
import React from "react";
import JonSnow from "./components/JonSnow";
import Cersei from "./components/Cersei";
import Wrapper from "./components/Wrapper"
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
const App = () => 
<div>
  <Wrapper>
    <JonSnow />
    <Cersei />
    <AriaStark />
    <SandorClegane />
    <TyrionLannister/>
    <Margaery />
    <SirDavos />
    <Dani />
    <SansaStark />
    <LittleFinger />
    <NedStark/>
    <Nightking />
    <Counter />
  </Wrapper>
</div>

export default App;
