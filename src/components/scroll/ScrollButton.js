import { KeyboardArrowUp } from "@mui/icons-material";
import { Fab, Tooltip, useTheme, Zoom } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useCallback } from "react";

const ScrollToTop = () => {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTopFu = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Tooltip title="scroll to top">
      <Zoom in={trigger} appear={true}>
        <Fab
          size="small"
          aria-label="Scroll back to top"
          onClick={scrollToTopFu}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 100,
            backgroundColor: "rgb(225, 173, 76)",
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.mode === "dark" ? "#FFF" : "#000",
              color: theme.palette.mode === "dark" ? "#000" : "#FFF",
            },
          }}
        >
          <KeyboardArrowUp fontSize="medium" />
        </Fab>
      </Zoom>
    </Tooltip>
  );
};

export default ScrollToTop;
