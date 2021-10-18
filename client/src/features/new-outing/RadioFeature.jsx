import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";

export default function RadioFeature({
  RadioFeatureQuestion,
  buildingOption,
  handleBuildingOption,
}) {
  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "300",
          color: " #333333",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        {RadioFeatureQuestion}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          name="controlled-radio-buttons-group"
          value={buildingOption}
          onChange={handleBuildingOption}
        >
          <FormControlLabel
            value="BUILD-YOUR-OWN"
            control={<Radio />}
            label="Build-Your-Own"
          />
          <FormControlLabel
            value="AUTO-BUILD"
            control={<Radio />}
            label="Auto-Build"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
}
