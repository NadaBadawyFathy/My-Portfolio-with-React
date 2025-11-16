import React from "react";
import Main from "../components/3-main/Main";
import { Container, CssBaseline, useTheme } from "@mui/material";

export default function ProjectsPage() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        backgroundColor: theme.palette.mainBackground[theme.palette.mode],
        pt: 10,
        pb: 5,
      }}
    >
      <CssBaseline />
      <Main />
    </Container>
  );
}
