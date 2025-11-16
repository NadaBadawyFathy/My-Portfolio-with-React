import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";

export default function CardCom({ project }) {
  return (
    <Card
      component={motion.div}
      layout
      initial={{ transform: "scale(0)" }}
      animate={{ transform: "scale(1)" }}
      exit={{ opacity: 0 }}
      whileHover={{
        scale: 1.01,
        rotate: -1,
        boxShadow: "0px 0px 20px rgb(225, 173, 76)",
      }}
      transition={{ duration: 2, type: "spring", stiffness: 60 }}
      sx={{
        width: 285,
        minHeight: 400, 
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", 
        border: "2px solid transparent",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          borderColor: "rgb(225, 173, 76)",
          rotate: "1deg",
        },
      }}
    >
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        loading="lazy"
        sx={
          {objectFit:"contain"}
        }
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {project.description.slice(0, 150)} .......
        </Typography>
      </CardContent>

      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={1.5}
        mt="auto"
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={1.5}
        >
          {project.tech.map((img, index) => (
            <img key={index} src={img} alt="" width={"30px"} />
          ))}
        </Stack>

        <CardActions sx={{ justifyContent: "center", gap: 1 }}>
          {project.demo && (
            <Tooltip title="Demo">
              <IconButton
                component={"a"}
                target="_blank"
                href={project.demo}
                sx={{
                  opacity: 0.6,
                  transition: "0.3s",
                  "&:hover": { opacity: 1 },
                }}
              >
                <LinkIcon />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Repo">
            <IconButton
              component={"a"}
              target="_blank"
              href={project.repo}
              sx={{
                opacity: 0.6,
                transition: "0.3s",
                "&:hover": { opacity: 1 },
              }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </CardActions>
      </Stack>
    </Card>
  );
}
