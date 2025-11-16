import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  useTheme,
  Typography,
} from "@mui/material";
import Contact from "../components/4-contact/Contact";
import SocialLinksCom from "../components/SocialLinks";

import { motion } from "framer-motion";

export default function ContactPage() {
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
          pt: 10,
          pb: 5,
        }}
      >
        <CssBaseline />
        <Contact />
        <Box pt={5.5} textAlign={"center"}>
          <Typography variant="h5" mb={1}>
            Stay Connected
          </Typography>
          <SocialLinksCom />
        </Box>
      </Container>
    </motion.div>
  );
}
