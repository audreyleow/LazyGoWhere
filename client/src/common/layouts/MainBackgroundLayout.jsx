import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import BackgroundImage from "../../assets/images/login_background.png";

export default function MainBackgroundLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <Typography
          sx={{
            color: "#3459B9",
            fontFamily: "SingleDayRegular",
            fontSize: "36px",
            fontWeight: "400",
          }}
        >
          Lazy Go Where
        </Typography>
        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: "300",
            color: "#000000",
            textAlign: "center",
          }}
        >
          Lazy to plan for your next outing? Leave it to us.
        </Typography>
        <Paper sx={{ width: "70%", margin: "auto" }}>{children}</Paper>
      </Box>
    </>
  );
}
