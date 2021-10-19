import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
          <Box
            component={Link}
            to={`/recommendations/${item._id}`}
            sx={{
              textDecoration: "none",
            }}
          >
            {item.imageIds.length > 0 ? (
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/lazy-go-where-dev.appspot.com/o/${item.imageIds[0]}.jpeg?alt=media`}
                style={{ width: "400px", height: "270px" }}
              />
            ) : (
              <img
                src={`https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg`}
                style={{ width: "400px", height: "270px" }}
              />
            )}
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "700",
                fontFamily: "Roboto",
                color: "#000000",
              }}
            >
              {item.name}
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "400",
                fontFamily: "Roboto",
                color: "#000000",
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
