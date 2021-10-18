import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import MapImage from "../../assets/images/map_image.png";

export default function SingleItinerary({
  loadedItinerary,
  setLoadedItinerary,
}) {
  const placesLeftNo = 3;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 10px",
        }}
      >
        <img src={MapImage} />
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", fontFamily: "Roboto" }}
        >
          Your personal itinerary
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "300",
            fontFamily: "Roboto",
            paddingTop: "15px",
          }}
        >
          {placesLeftNo} places left to visit. Keep exploring!
        </Typography>
        <FormGroup>
          <FormControlLabel
            labelPlacement="start"
            control={<Switch defaultChecked />}
            label="Auto-replace activity"
          />
        </FormGroup>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#AA0000",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "300",
            marginTop: "40px",
            width: "80%",
          }}
        >
          Replace Itinerary
        </Button>
        <Box sx={{ display: "flex", paddingTop: "40px" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#B93434",
              fontSize: "18px",
              fontWeight: "300",
              marginRight: "5px",
            }}
          >
            Delete Itinerary
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3459B9",
              fontSize: "18px",
              fontWeight: "300",
              marginLeft: "5px",
            }}
          >
            Save Itinerary
          </Button>
          <Button
            onClick={() => {
              setLoadedItinerary(undefined);
            }}
          >
            Back
          </Button>
        </Box>
      </Box>
    </>
  );
}
