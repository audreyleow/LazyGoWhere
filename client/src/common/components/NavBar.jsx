import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  Button,
  Drawer,
  Toolbar,
  Link,
} from "@mui/material";
import {
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  EditLocationOutlined as EditLocationOutlinedIcon,
} from "@mui/icons-material";
import MainDrawer from "../../features/itinerary-drawer/MainDrawer";
import { useLoadedItinerary } from "../../features/itinerary-drawer/LoadedItineraryProvider";

export default function Navbar(props) {
  const { setIsMainDrawerOpen, isMainDrawerOpen } = useLoadedItinerary();

  const LOCATION = "Pioneer";
  const capitalizeFunction = (text) => {
    return text.toUpperCase();
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              height: "80px",
              padding: "0px 0px 0px 15px !important",
              justifyContent: "space-between",
            }}
          >
            <Link
              sx={{
                color: "#3459B9",
                fontFamily: "SingleDayRegular",
                fontSize: "36px",
                fontWeight: "400",
                paddingRight: "10px",
                textDecoration: "none",
              }}
              href="/"
            >
              Lazy Go Where
            </Link>
            <Box>
              <Button
                sx={{
                  paddingRight: "10px",
                  borderLeft: "0.3px solid #000000",
                  borderRight: "0.3px solid #000000",
                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  setIsMainDrawerOpen(true);
                }}
              >
                <PersonOutlineOutlinedIcon
                  sx={{
                    color: "#3459B9",
                    fontSize: "40px",
                  }}
                />
              </Button>
              <Button
                sx={{
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "0px",
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "none",
                  },
                }}
              >
                <EditLocationOutlinedIcon
                  sx={{ color: "#3459B9", fontSize: "40px" }}
                />
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        keepMounted
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        anchor="right"
        open={isMainDrawerOpen}
        onClose={() => {
          setIsMainDrawerOpen(false);
        }}
      >
        <MainDrawer />
      </Drawer>
    </>
  );
}
