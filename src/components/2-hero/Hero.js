import React, { useEffect, useRef } from "react";
import {
  Box,
  useTheme,
  Typography,
  Stack,
  Tooltip,
  Button,
  useMediaQuery,
} from "@mui/material";
import CV from "../../Assets/Nada_Badawy_FrontEnd_Developer.pdf";
import Grid from "@mui/material/Grid";
import VerifiedIcon from "@mui/icons-material/Verified";
import SocialLinksCom from "../SocialLinks";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import heroAnimation from "../../animation/Web Development.json";
import Lottie from "lottie-react";

export default function Hero() {
  const theme = useTheme();
  const displayAnimation = useMediaQuery("(min-width:850px)");
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.8);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 7, lg: 10, md: 10 } }}>
      <Grid container spacing={2} alignItems={"center"}>
        {/* LEFT SIDE - INFO */}
        <Grid item xs={12} lg={7} sm={displayAnimation ? 7 : 12}>
          <Box sx={{ mb: 3 }}>
            <Tooltip title="Nada Badawy">
              <img
                src={require("../../Assets/me.jpg")}
                alt="Nada Badawy"
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  boxShadow: "2px 2px 15px gray",
                  borderRadius: "50%",
                  border: `3px solid ${theme.palette.divider}`,
                  backgroundColor: "white",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                loading="lazy"
              />
            </Tooltip>
            <Tooltip title="Nada Badawy">
              <VerifiedIcon
                fontSize="small"
                sx={{ color: "rgb(225, 173, 76)", cursor: "pointer" }}
              />
            </Tooltip>
          </Box>

          <Typography
            sx={{ fontWeight: "bold", my: 3, color: "rgb(225, 173, 76)", fontSize: { xs: "2rem", sm: "2.2rem", md: "2.8rem" } }}
            variant="h4"
          >
            Nada Badawy Fathy
          </Typography>

          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            Front-End Developer (React js) , <br /> Graphic Designer
          </Typography>

          <Typography
            variant="body1"
            sx={{
              my: 3,
              color: theme.palette.text.secondary,
              letterSpacing: "1px",
            }}
          >
            Hello! I'm Nada Badawy, a Front-End Developer and an IT graduate
            from the Faculty of Computers and Artificial Intelligence. I
            specialize in building modern, responsive, and user-friendly web
            interfaces with a strong focus on UI and UX design principles.
          </Typography>

          <Stack direction={"row"} gap={1}>
            <SocialLinksCom />
          </Stack>

          <Tooltip title="Download CV">
            <Button
              component={"a"}
              variant="outlined"
              sx={{
                borderColor: "rgb(225, 173, 76)",
                color: "rgb(225, 173, 76)",
                mt: 3,
                borderRadius: 3,
                width: "200px",
                "&:hover": {
                  borderColor: "rgb(225, 173, 76)",
                  backgroundColor: "rgb(225, 173, 76)",
                  color: "white",
                },
              }}
              endIcon={<CloudDownloadIcon />}
              href={CV}
              target="_blank"
              download="Nada_Badawy_FrontEnd_Developer_CV.pdf"
            >
              Download My CV
            </Button>
          </Tooltip>
        </Grid>

        {/* RIGHT SIDE - LOTTIE ANIMATION */}
        <Grid item xs={12} lg={5} sm={5}>
          {displayAnimation && (
            <Lottie
              style={{ height: "85%", width: "85%" }}
              animationData={heroAnimation}
              lottieRef={lottieRef}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
