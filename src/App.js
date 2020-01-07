import React from "react";
import { GlobalStyles } from "./styles/globalStyles";
import Timeline from "./pages/timeline.page";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalThemes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Timeline />
      </div>
    </ThemeProvider>
  );
};

export default App;
