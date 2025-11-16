import { Box, Stack, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "./Card";
import { myProject } from "../projects/Projects";
import Pagination from "@mui/material/Pagination";

export default function Main() {
  const [page, setPage] = useState(1);
  const limtePerPage = 6;
  const theme = useTheme();
  const [alignment, setAlignment] = React.useState("allProjects");
  const boxRef = useRef(null);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      setPage(1);
    }
  };

  const allProjectsButtons = [
    { title: "All Projects", value: "allProjects" },
    { title: "HTML & CSS", value: "htmlandcss" },
    { title: "JavaScript", value: "javascript" },
    { title: "React Js", value: "react" },
  ];

  const projectsButtons = allProjectsButtons.map((button, index) => (
    <ToggleButton
      value={button.value}
      key={index}
      sx={{
        textTransform: "capitalize",
        textAlign: "center",
        fontSize: "1.05rem",
        padding: "0.75rem 0",
        width: { lg: "10rem", md: "10rem", sm: "9rem", xs: "8.5rem" },
        borderWidth: "2px !important",
        borderRadius: "8px !important",
        color: "rgb(114,114,118)",
        marginLeft: "0 !important",
        border: `2px solid ${theme.palette.divider} !important`,
        letterSpacing: "0.7px",
        transition: "0.3s !important",
        "&:hover": {
          border: "2px solid #9C7E5A !important",
          backgroundColor: "transparent !important",
          color: "inherit !important",
        },
      }}
    >
      {button.title}
    </ToggleButton>
  ));

  const filteredProjects =
    alignment === "allProjects"
      ? myProject
      : myProject.filter((project) => project.stack === alignment);

  const start = limtePerPage * (page - 1);
  const end = start + limtePerPage;
  const paginatedProjects = filteredProjects.slice(start, end);

  return (
    <Box ref={boxRef}>
      <Stack direction={{ sm: "column", lg: "row", md: "row" }} gap={3}>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "2px solid rgb(225, 173, 76) !important",
                color: `${theme.palette.text.primary} !important`,
                borderRadius: "8px !important",
                backgroundColor: "rgb(156 126 90 /5%)!important",
              },
              display: "flex",
              flexDirection: { lg: "column", md: "column", sm: "row" },
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.3,
              transition: "0.3s !important",
            }}
          >
            {projectsButtons}
          </ToggleButtonGroup>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            gap: 4,
          }}
        >
          {paginatedProjects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </Box>
      </Stack>

      <Box display={"flex"} justifyContent={"center"} mt={5}>
        <Pagination
          count={Math.ceil(filteredProjects.length / limtePerPage)}
          page={page}
          onChange={(event, value) => {
            setPage(value);
            boxRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{
            "& .MuiPaginationItem-root": {
              "&.Mui-selected": {
                backgroundColor: "rgb(225, 173, 76)",
                color: "white",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "rgb(17 138 124)",
              },
              "&:hover": {
                backgroundColor: "rgba(149, 125, 80, 0.2)",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
