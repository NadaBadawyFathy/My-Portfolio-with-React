import {
  Box,
  Container,
  CssBaseline,
  useTheme,
  Typography,
} from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import useMediaQuery from "@mui/material/useMediaQuery";
import SocialLinksCom from "../components/SocialLinks";
import { motion } from "framer-motion";
export default function AboutPage() {
  const hideShape = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Container
        sx={{
          backgroundColor: theme.palette.mainBackground[theme.palette.mode],
          py: 5,
        }}
      >
        <CssBaseline />

        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color="rgb(225, 173, 76)"
        >
          About Me
        </Typography>
        <Grid container mt={5} alignItems={"center"} justifyContent="center">
          <Grid
            size={{ xs: 12, md: 6, lg: 6 }}
            textAlign={"center"}
            position={"relative"}
          >
            {hideShape && (
  <Box
    sx={{
      position: "absolute",
      top: "25%",
      left: "25%",
      transform: "translate(-50%, -50%)",
      width: "300px",
      height: "300px",
      backgroundColor:"rgb(225 173 76/40%)",
      borderRadius: "50%",
      zIndex: 0,
      filter: "blur(10px)", 
    }}
  />
)}

            <img
              src={require("../Assets/me.png")}
              alt="Nada Badawy"
              loading="lazy"
              style={{
                maxWidth: "100%",
                width: "390px",
                borderRadius: "12px",
                position: "relative",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Typography
              variant="body1"
              fontSize={{ lg: "18px", md: "16px", sm: "16px", xs: "16px" }}
              mt={3}
              textAlign={!hideShape ? "center" : "start"}
              letterSpacing={"0.5px"}
            >
              Hello! I'm Nada Badawy, a Front-End Developer and 
              an IT graduate from the Faculty of Computers and Artificial Intelligence. 
              I specialize in building modern, responsive, 
              and user-friendly web interfaces with a strong focus on UI and UX design principles.
              <br />
              I am passionate about transforming creative ideas into interactive 
              digital experiences. I enjoy solving problems, improving user flows, 
              and making every interface not only visually appealing but also intuitive 
              and seamless to use.
            </Typography>
            <Typography
              variant="body1"
              mt={3}
              fontSize={{ lg: "18px", md: "16px", sm: "15px", xs: "15px" }}
              textAlign={!hideShape ? "center" : "start"}
              letterSpacing={"0.5px"}
            >
              In addition to development, I am actively involved in tech communities 
              where I share knowledge, support students, and contribute to collaborative learning environments. I believe in continuous learning, teamwork, 
              and always pushing myself to grow both technically and personally.
              <br />
              
              My goal is to build meaningful projects that add real value, 
              enhance user experiences, and reflect clean, thoughtful design.
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }} textAlign={"center"}>
          <SocialLinksCom />
        </Box>
      </Container>
    </motion.div>
  );
}
