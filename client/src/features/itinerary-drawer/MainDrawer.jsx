import React from "react";
import { Box } from "@mui/material";
import ItineraryDrawer from "../itinerary-drawer/ItineraryDrawer";
import { useLoadedItinerary } from "./LoadedItineraryProvider";

export default function MainDrawer() {
  const { setIsMainDrawerOpen } = useLoadedItinerary();

  return (
    <>
      <Box
        role="presentation"
        onClick={() => {
          setIsMainDrawerOpen(true);
        }}
        onKeyDown={() => {
          setIsMainDrawerOpen(false);
        }}
      >
        <ItineraryDrawer />
      </Box>
    </>
  );
}
