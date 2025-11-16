import {
  Container,
  CssBaseline,
  useTheme,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import html from "../Assets/HTML5.png";
import css from "../Assets/CSS3.png";
import sass from "../Assets/Sass.png";
import bootStrap from "../Assets/Bootstrap.png";
import Tailwind from "../Assets/Tailwind CSS.png";
import JavaScript from "../Assets/JavaScript.png";
import react from "../Assets/React.png";
import ReactbootStrap from "../Assets/React Bootstrap.png";
import ReactRouter from "../Assets/react-router.png";
import Redux from "../Assets/Redux.png";
import MaterialUi from "../Assets/Material UI.png";
import Git from "../Assets/Git.png";
import GitHub from "../Assets/GitHub.png";
import CleanCode from "../Assets/clean code.png";
import jquery from "../Assets/jQuery.png";
import TypeScript from "../Assets/TypeScript.png";
import PromptEngineer from "../Assets/chatgpt.png";
import json from "../Assets/JSON.png";
import swiper from "../Assets/swiper.png";
import Rapid from "../Assets/Rapid API.png";
//
import VS from "../Assets/Visual Studio Code (VS Code).png";
import npm from "../Assets/NPM.png";
import ChatGPT from "../Assets/chatgpt.png";
import GitHubCodespaces from "../Assets/GitHub Codespaces.png";
import Postman from "../Assets/Postman.png";
import Canva from "../Assets/Canva.png";
import Figma from "../Assets/Figma.png";
import Vite from "../Assets/Vite.js.png";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const theme = useTheme();
  const mySkills = [
    {
      title: "HTML",
      img: html,
    },

    {
      title: "CSS",
      img: css,
    },
    {
      title: "Bootstrap",
      img: bootStrap,
    },
    {
      title: "Tailwind CSS",
      img: Tailwind,
    },
    {
      title: "JavaScript",
      img: JavaScript,
    },
    {
      title: "React",
      img: react,
    },
    {
      title: "React Bootstrap",
      img: ReactbootStrap,
    },
    {
      title: "React Router",
      img: ReactRouter,
    },
    {
      title: "Redux",
      img: Redux,
    },
    {
      title: "Material UI",
      img: MaterialUi,
    },
    {
      title: "Git",
      img: Git,
    },
    {
      title: "GitHub",
      img: GitHub,
    },

    {
      title: "SASS",
      img: sass,
    },
    {
      title: "Clean Code",
      img: CleanCode,
    },
    {
      title: "jQuery",
      img: jquery,
    },
    {
      title: "TypeScript",
      img: TypeScript,
    },
    {
      title: "Prompt Engineerer",
      img: PromptEngineer,
    },
    {
      title: "JSON Server",
      img: json,
    },
    {
      title: "Swiper js",
      img: swiper,
    },
  ];
  const myTools = [
    {
      title: "VS Code",
      img: VS,
    },
    {
      title: "NPM",
      img: npm,
    },
    {
      title: "ChatGPT",
      img: ChatGPT,
    },
    {
      title: "GitHub Desktop",
      img: GitHubCodespaces,
    },
    {
      title: "Postman",
      img: Postman,
    },

    {
      title: "Canva",
      img: Canva,
    },
    {
      title: "Figma",
      img: Figma,
    },
    {
      title: "Vite",
      img: Vite,
    },
    {
      title: "Rapid's API",
      img: Rapid,
    },
  ];
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
  letterSpacing={"0.6px"}
>
  Experience
</Typography>

<Grid container mt={5} alignItems={"start"} spacing={2}>

  {/* SKILLS */}
  <Grid size={{ xs: 12, md: 12, lg: 12 }}>
    <Typography
      variant="h5"
      mx={"auto"}
      fontWeight={"bold"}
      letterSpacing={"0.6px"}
      borderBottom={"2px solid rgb(225, 173, 76)"}
      width={"fit-content"}
      pb={0.8}
      color={theme.palette.text.primary}
    >
      Skills
    </Typography>

    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={3}
      justifyContent={"center"}
      mt={4}
    >
      {mySkills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              p: 2,
              borderRadius: "14px",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(126, 98, 71, 0.1)"
                  : "rgb(88, 71, 42)",
              cursor: "pointer",
              transition: "0.35s",
              border: "1px solid rgba(126, 98, 71, 0.3)",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow:
                  theme.palette.mode === "light"
                  ? "0 6px 16px rgba(0,0,0,0.18)"
                  : "0 6px 16px rgba(126, 98, 71)",
              },
            }}
          >
            <img
              src={skill.img}
              alt={skill.title}
              style={{
                width: 55,
                height: 55,
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "12px",
              }}
            />
            <Typography mt={1} sx={{ color: theme.palette.text.primary }}>
              {skill.title}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  </Grid>

  <Divider sx={{ my: 3, width: "100%", backgroundColor: "rgb(225, 173, 76)" }} />

  {/* TOOLS */}
  <Grid size={{ xs: 12, md: 12, lg: 12 }}>
    <Typography
      variant="h5"
      textAlign={"center"}
      mx={"auto"}
      fontWeight={"bold"}
      letterSpacing={"0.6px"}
      borderBottom={"2px solid rgb(225, 173, 76)"}
      width={"fit-content"}
      pb={0.8}
      color={theme.palette.text.primary}
    >
      Tools
    </Typography>

    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={3}
      justifyContent={"center"}
      mt={4}
    >
      {myTools.map((tool, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: "center",
              mb: 2,
              p: 2,
              borderRadius: "14px",
              backgroundColor:
                theme.palette.mode === "light"
                  ? "rgba(126, 98, 71, 0.1)"
                  : "rgb(88, 71, 42)",
              cursor: "pointer",
              transition: "0.35s",
              border: "1px solid rgba(126, 98, 71, 0.3)",
              "&:hover": {
                transform: "translateY(-6px)",
                 boxShadow:
                  theme.palette.mode === "light"
                  ? "0 6px 16px rgba(0,0,0,0.18)"
                  : "0 6px 16px rgba(126, 98, 71)",
              },
            }}
          >
            <img
              src={tool.img}
              alt={tool.title}
              style={{
                width: 55,
                height: 55,
                backgroundColor: "white",
                padding: "6px",
                borderRadius: "12px",
              }}
            />
            <Typography mt={1} sx={{ color: theme.palette.text.primary }}>
              {tool.title}
            </Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  </Grid>
</Grid>

      </Container>
    </motion.div>
  );
}
