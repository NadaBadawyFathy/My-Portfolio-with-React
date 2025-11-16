import React from "react";
import Main from "../components/3-main/Main";
import Contact from "../components/4-contact/Contact";
import Footer from "../components/5-footer/Footer";
import { Container, CssBaseline, Divider, useTheme } from "@mui/material";
import Hero from "../components/2-hero/Hero";
import ScrollToTop from "../components/scroll/ScrollButton";
import { motion } from "framer-motion";

export default function HomePage() {
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
        }}
      >
        <CssBaseline />
        <Hero />
        <Divider sx={{ my: 6 }} />
        <Main />
        <Divider sx={{ my: 6 }} />
        <Contact />
        <Divider sx={{ my: 4 }} />
        <Footer />
        <ScrollToTop />
      </Container>
    </motion.div>
  );
}
