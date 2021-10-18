import React from "react";
import { Typography, Box } from "@mui/material";
import ItineraryDrawer from "../itinerary-drawer/ItineraryDrawer";
import SingleItinerary from "../itinerary-drawer/SingleItinerary";

export default function MainDrawer({ toggleDrawer }) {
  return (
    <>
      <Box
        role="presentation"
        onClick={toggleDrawer(true)}
        onKeyDown={toggleDrawer(false)}
      >
        <ItineraryDrawer />
      </Box>
    </>
  );
}
