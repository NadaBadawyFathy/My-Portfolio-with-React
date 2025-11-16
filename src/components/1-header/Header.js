import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ModeChange } from "../../context/ModeContext";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const theme = useTheme();
  const mode = React.useContext(ModeChange);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: theme.palette.mainBackground[theme.palette.mode],
          color: theme.palette.text.primary,
          boxShadow: scrolled
            ? "0px 4px 12px rgba(0,0,0,0.12)"  
            : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
          backdropFilter: "blur(12px)",   
          WebkitBackdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 1.5,
          }}
        >
          {/* زر المينيو في الموبايل */}
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* عناصر النافبار في المنتصف */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                style={({ isActive }) => ({
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontWeight: isActive ? "bold" : 500,
                  color: isActive ? "rgb(225, 173, 76)" : theme.palette.text.primary,
                  backgroundColor: "transparent", 
                  transition: "0.3s",
                  textDecoration: "none",
                })}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>

          {/* زر الدارك مود */}
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              theme.palette.mode === "dark"
                ? mode.setMode("light")
                : mode.setMode("dark");
            }}
            sx={{
              border: `2px solid ${theme.palette.divider}`,
              borderRadius: "50%",
              p: "4px",
              transition: "0.3s",
              "&:hover": { transform: "rotate(15deg)" },
            }}
          >
            <DarkModeOutlinedIcon
              sx={{
                fontSize: 22,
                color: theme.palette.mode === "dark" ? "rgb(225, 173, 76)" : "#5c5c5c",
                transition: "0.3s",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Mobile */}
      <Drawer open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: "100vh",
            bgcolor: theme.palette.mainBackground[theme.palette.mode],
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          {/* X CLOSE BUTTON */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerToggle}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 24,
                  color: theme.palette.text.primary,
                  cursor: "pointer",
                }}
              >
                ✕
              </Typography>
            </IconButton>
          </Box>

          {/* NAV ITEMS */}
          <List sx={{ mt: 2, flexGrow: 1 }}>
            {navItems.map((item, index) => (
              <ListItem
                key={index}
                component={NavLink}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  px: 2,
                  py: 1,
                  color: theme.palette.text.primary,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "0.3s",
                  "&.active": {
                    fontWeight: "bold",
                    color: "rgb(225, 173, 76)",
                  },
                  "&:hover": {
                    color: "rgb(225, 173, 76)",
                  },
                }}
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
