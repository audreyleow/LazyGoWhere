import React, { useState } from "react";
import FilterByCategory from "./FilterByCategory";
import { useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  InputLabel,
  ListItemText,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { useQuery } from "../../common/hooks/use-query.hook";
import { Link } from "react-router-dom";
import axios from "axios";
import qs from "qs";
import { filterOptions } from "../../common/constants/activities-filter-options.contant";

export default function FilteredRecommendationView() {
  const location = useLocation();
  const query = useQuery();

  const [recommendations, setRecommendations] = useState();

  const [allChosen, setAllChosen] = React.useState([]);

  const handleAllChosenChange = (event) => {
    const {
      target: { value },
    } = event;
    setAllChosen(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  React.useEffect(() => {
    setAllChosen(query.categoryDescriptions ?? filterOptions);
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    axios
      .get(
        `/activities?${qs.stringify({
          limit: 5,
          categoryDescriptions: query.categoryDescriptions ?? filterOptions,
        })}`
      )
      .then((res) => {
        setRecommendations(res.data);
      });
    // eslint-disable-next-line
  }, [location]);

  if (!recommendations) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", padding: "20px 15px" }}
    >
      <Typography
        sx={{
          color: "#333333",
          fontSize: "48px",
          fontWeight: "300",
          font: "Roboto",
        }}
      >
        Recommendations
      </Typography>
      <Box sx={{ display: "flex" }}>
        <FormControl sx={{ m: 1, width: "70%" }}>
          <InputLabel>Filter by activity types</InputLabel>
          <Select
            label="Filter by activity types"
            multiple
            value={allChosen}
            onChange={handleAllChosenChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {filterOptions.map((filterOption) => (
              <MenuItem key={filterOption} value={filterOption}>
                <Checkbox
                  checked={allChosen.indexOf(filterOption) > -1}
                  name={filterOption}
                />
                <ListItemText primary={filterOption} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          sx={{ m: 1 }}
          component={Link}
          to={{
            pathname: "/recommendations",
            search:
              "?" +
              qs.stringify({
                categoryDescriptions: allChosen,
              }),
          }}
        >
          Filter
        </Button>
      </Box>

      {Object.entries(recommendations).map(([category, activity]) => (
        <FilterByCategory
          key={category}
          categoryName={category}
          entryDetails={activity}
        />
      ))}
    </Box>
  );
}
