import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import BackgroundImage from "../../assets/images/login_background.png";

export default function MainBackgroundLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          height: "100%",
          padding: "10px 15px 20px",
          background: `url(${BackgroundImage})  no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      >
        <Typography
          sx={{
            color: "#3459B9",
            fontFamily: "SingleDayRegular",
            fontSize: "36px",
            fontWeight: "400",
            paddingBottom: "30px",
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
        <Paper
          sx={{
            width: "70%",
            margin: "auto",
            padding: "10px 20px 20px",
            borderRadius: "20px",
          }}
        >
          {children}
        </Paper>
      </Box>
    </>
  );
}
