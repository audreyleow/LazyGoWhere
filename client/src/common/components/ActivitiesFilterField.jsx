import React, { useState } from "react";
import {
  FormControl,
  Typography,
  Box,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import { filterOptions } from "../constants/activities-filter-options.contant";

const ITEMS_PER_COLUMN = 4;

export default function ActivitiesFilterField(props) {
  const {} = props;

  const [state, setState] = useState(
    filterOptions.reduce((acc, curr) => ({ ...acc, [curr]: false }))
  );

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const error = Object.values(state).filter((v) => v).length === 0;

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
          paddingBottom: "10px",
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
                      checked={state[option]}
                      onChange={handleChange}
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
        <FormHelperText>You can display an error</FormHelperText>
      </Box>
    </>
  );
}
