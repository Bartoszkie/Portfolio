import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import Timeline from "./pages/timeline.page";
import Navbar from './components/navbar/navbar.component';

import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalThemes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar/>
        <GlobalStyles />
        <Timeline />
      </div>
    </ThemeProvider>
  );
};

export default App;
