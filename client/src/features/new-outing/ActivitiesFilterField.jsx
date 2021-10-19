import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { filterOptions } from "../../common/constants/activities-filter-options.contant";

const ITEMS_PER_COLUMN = 4;

export default function ActivitiesFilterField({
  activitiesSelected,
  handleActivitiesSelected,
}) {
  const error = Object.values(activitiesSelected).filter((v) => v).length === 0;

  const filterColumns = filterOptions.reduce(
    (acc, curr) => {
      if (acc[acc.length - 1].length >= ITEMS_PER_COLUMN) {
        return [...acc, [curr]];
      } else {
        acc[acc.length - 1].push(curr);
        return acc;
      }
    },
    [[]]
  );

  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "300",
          color: " #333333",
          paddingTop: "20px",
        }}
      >
        What activities would you like?
      </Typography>
      <Box sx={{ display: "flex" }}>
        {filterColumns.map((column) => (
          <FormControl
            key={column}
            required
            error={error}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
          >
            <FormGroup sx={{ display: "flex", flexDirection: "column" }}>
              {column.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    <Checkbox
                      checked={activitiesSelected[option]}
                      onChange={handleActivitiesSelected}
                      name={option}
                    />
                  }
                  label={option}
                  labelPlacement="start"
                />
              ))}
            </FormGroup>
          </FormControl>
        ))}
      </Box>
    </>
  );
}
