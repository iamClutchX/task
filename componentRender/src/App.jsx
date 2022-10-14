import { useState } from "react";
import "./App.css";
import Mobile from "./components/Mobile";
import Tablet from "./components/Tablet";
import Desktop from "./components/Desktop";
function App() {
  const resolution = window.innerWidth;
  const isMobile = resolution >= 320 && resolution <= 480;
  const isTablet = resolution >= 768 && resolution <= 1024;
  const isDesktop = !isMobile && !isTablet;

  return (
    <div className="App">
      {isMobile && <Mobile />}
      {isTablet && <Tablet />}
      {isDesktop && <Desktop />}
    </div>
  );
}

export default App;
