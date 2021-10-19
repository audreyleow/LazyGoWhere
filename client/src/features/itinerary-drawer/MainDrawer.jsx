import React from "react";
import { Box } from "@mui/material";
import ItineraryDrawer from "../itinerary-drawer/ItineraryDrawer";

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
