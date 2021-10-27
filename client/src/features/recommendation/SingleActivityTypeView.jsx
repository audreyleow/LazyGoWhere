import React, { useState, useEffect } from "react";
import SingleActivityTypeTable from "./SingleActivityTypeTable";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import qs from "qs";

export default function SingleActivityTypeView({ type }) {
  const [recommendations, setRecommendations] = useState();
  const [page, setPage] = useState(0);
  const SKIPVALUE = 12;

  const skipValueCalc = (page) => page * SKIPVALUE;

  useEffect(
    () => {
      axios
        .get(
          `/activities?${qs.stringify({
            limit: 12,
            skip: skipValueCalc(page),
            categoryDescriptions: [type],
          })}`
        )
        .then((res) => {
          if (res.data[type].length === 0) {
            setPage(0);
          } else {
            setRecommendations(res.data);
          }
        });
    },
    // eslint-disable-next-line
    [page]
  );
  const onNextClick = () => {
    setPage(page + 1);
  };
  const onPrevClick = () => {
    if (!!page) {
      setPage(page - 1);
    }
  };

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
        <Typography>{type}Loading...</Typography>
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
        {type}
      </Typography>
      {Object.entries(recommendations).map(([category, activities]) => (
        <SingleActivityTypeTable activities={activities} />
      ))}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          paddingBottom: "10px",
        }}
      >
        <ButtonGroup variant="outlined">
          <Button disabled={!page} onClick={onPrevClick}>
            Previous
          </Button>
          <Button onClick={onNextClick}>Next</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
}
