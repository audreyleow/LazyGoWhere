import React from "react";
import { Grid } from "@mui/material";
import _ from "lodash";
import SingleActivityCard from "./SingleActivityCard";

const ITEMS_PER_ROW = 3;

export default function SingleActivityTypeTable({ activities }) {
  const activitiesRows = activities.reduce(
    (acc, curr) => {
      if (acc[acc.length - 1].length >= ITEMS_PER_ROW) {
        return [...acc, [curr]];
      } else {
        acc[acc.length - 1].push(curr);
        return acc;
      }
    },
    [[]]
  );

  return (
    <Grid container sx={{ display: "block" }}>
      {activitiesRows.map((activitiesRow) => {
        return (
          <Grid item sx={{ display: "flex", justifyContent: "space-evenly" }}>
            {activitiesRow.map((activity) => {
              return <SingleActivityCard item={activity} />;
            })}
          </Grid>
        );
      })}
    </Grid>
  );
}
