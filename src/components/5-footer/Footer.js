import { Stack, Typography } from "@mui/material";
import React from "react";
import SocialLinksCom from "../SocialLinks";
export default function Footer() {
  return (
    <Stack
      direction={{ md: "row", sm: "column", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      pb={4}
      gap={2}
    >
      <Typography fontWeight={"bold"} variant="h5" color="text.secondary">
        Contact Information : <br /> <SocialLinksCom />
      </Typography>

      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Copyright © 2025
        <span
          style={{
            color: "rgb(225, 173, 76)",
            fontWeight: "bold",
            margin: "0 3px",
          }}
        >
          Nada Badawy
        </span>
        All Rights Reserved.
      </Typography>
    </Stack>
  );
}
