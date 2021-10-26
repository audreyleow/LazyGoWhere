import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import _ from "lodash";
import SingleActivityCard from "./SingleActivityCard";

export default function FilterByCategory({ categoryName, entryDetails }) {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: "300",
          fontFamily: "Roboto",
          color: "#000000",
        }}
      >
        {categoryName}
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowY: "hidden",
          scrollbarWidth: "none" /* Firefox */,
          "-ms-overflow-style": "none" /* Internet Explorer 10+ */,
          justifyContent: "space-between",
          "&::-webkit-scrollbar": {
            width: 0,
            height: 0,
          },
        }}
      >
        {entryDetails.map((item) => (
          <SingleActivityCard item={item} />
        ))}
        <Box
          sx={{
            textDecoration: "none",
            width: "410px",
            backgroundColor: "#4791db",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: "15px",
            margin: "15px",
          }}
        >
          <img
            src={`http://cdn.cnn.com/cnnnext/dam/assets/191212182124-04-singapore-buildings.jpg`}
            style={{ width: "350px", height: "200px", borderRadius: "10px" }}
          />
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "20px",
              paddingLeft: "35px",
              paddingRight: "35px",
            }}
          >
            Check out all the acitivites available for {categoryName} here!
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to={`/recommendations/${_.kebabCase(categoryName)}`}
            sx={{
              backgroundColor: "#FFFFFF",
              color: "#4791db",
              fontSize: "20px",
              width: "70%",
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            View More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
