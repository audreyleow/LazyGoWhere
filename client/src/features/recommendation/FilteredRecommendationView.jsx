import React, { useState } from "react";
import FilterByCategory from "./FilterByCategory";
import { Box, Typography } from "@mui/material";
import { useQuery } from "../../common/hooks/use-query.hook";
import axios from "axios";
import qs from "qs";

export default function FilteredRecommendationView() {
  const query = useQuery();

  const [recommendations, setRecommendations] = React.useState();

  React.useEffect(() => {
    if (query.categoryDescriptions) {
      axios
        .get(
          `/activities?${qs.stringify({
            limit: 5,
            categoryDescriptions: query.categoryDescriptions,
          })}`
        )
        .then((res) => {
          setRecommendations(res.data);
        });
    }
    // eslint-disable-next-line
  }, []);

  if (!recommendations) {
    return <p>Loading...</p>;
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
