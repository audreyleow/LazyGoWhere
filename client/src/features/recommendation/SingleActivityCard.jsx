import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import _ from "lodash";

export default function SingleActivityCard({ item }) {
  return (
    <Box
      component={Link}
      to={`/recommendations/${item._id}`}
      sx={{
        textDecoration: "none",
        margin: "15px 25px 15px 15px",
        borderRadius: "15px",
        width: "300px",
      }}
    >
      {item.imageIds.length > 0 ? (
        <img
          src={`https://firebasestorage.googleapis.com/v0/b/lazy-go-where-dev.appspot.com/o/${item.imageIds[0]}.jpeg?alt=media`}
          style={{ width: "300px", height: "270px", borderRadius: "10px" }}
          alt="activity"
        />
      ) : (
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg`}
          style={{ width: "300px", height: "270px", borderRadius: "10px" }}
          alt="unavailable"
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
          display: "-webkit-box",
          "-webkit-line-clamp": "3",
          "-webkit-box-orient": "vertical",
          overflow: "hidden",
        }}
      >
        {_.capitalize(item.description)}
      </Typography>
    </Box>
  );
}
