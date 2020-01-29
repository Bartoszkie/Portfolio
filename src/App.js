import React from "react";
//Pages
import AboutMe from "./pages/about-me/about-me.component";
import Timeline from "./pages/timeline/timeline.page";
import Realizations from "./pages/realizations/realizations.component";
//Component
import Navbar from "./components/navbar/navbar.component";
//Styles
import { GlobalStyles } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/globalThemes";
//Lib
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path="/Portfolio" component={AboutMe} />
          <Route path="/timeline" component={Timeline} />
          <Route path="/realizations" component={Realizations} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
