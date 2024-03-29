import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export default function DropdownFeature(props) {
  const {
    DropdownQuestion,
    DropdownCaption,
    DropdownValue,
    DropdownChangeHandler,
    DropdownContent,
  } = props;
  return (
    <>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "300",
          color: " #333333",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontFamily: "Roboto",
        }}
      >
        {DropdownQuestion}
      </Typography>
      <FormControl sx={{ width: "280px" }}>
        <InputLabel id="input-selector">{DropdownCaption}</InputLabel>
        <Select
          labelId="input-selector"
          value={DropdownValue}
          label={DropdownCaption}
          onChange={DropdownChangeHandler}
          inputProps={{ "aria-label": "Without label" }}
          autoWidth
        >
          {DropdownContent.map((IndividualDropdownContent) => (
            <MenuItem
              sx={{ width: "280px" }}
              value={IndividualDropdownContent}
              key={IndividualDropdownContent}
            >
              {IndividualDropdownContent}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}
