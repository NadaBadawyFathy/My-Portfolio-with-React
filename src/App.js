import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import {
  Box,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { ModeChange } from "./context/ModeContext";

import Header from "./components/1-header/Header";
import AboutPage from "./Pages/AboutPage";
import SkillsPage from "./Pages/SkillsPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const mode = React.useContext(ModeChange);

  const darkTheme = createTheme({
    palette: {
      mode: mode.mode,
      bodyBackground: {
        light: "#F5F5F5",
        dark: "#000000",
      },
      mainBackground: {
        light: "#FFFFFF",
        dark: "#18181B",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          backgroundColor:
            darkTheme.palette.bodyBackground[darkTheme.palette.mode],
        }}
      >
        <Container>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>

        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
