import { ThemeProvider } from "styled-components";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Sidebar from "./containers/Sidebar";
import EstiloGlobal, { Container } from "./styles";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import { useState } from "react";

function App() {
  const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(true);

  function changeTheme() {
    setIsUsingDarkTheme(!isUsingDarkTheme);
  }

  return (
    <ThemeProvider theme={isUsingDarkTheme ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
