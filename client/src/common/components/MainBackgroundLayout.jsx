import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/images/login_background.png";
import { useUser } from "../../features/auth/UserProvider";

export default function MainBackgroundLayout({ children }) {
  const { user, signOut } = useUser();

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component={Link}
            to="/"
            sx={{
              color: "#3459B9",
              fontFamily: "SingleDayRegular",
              fontSize: "36px",
              fontWeight: "400",
              textDecoration: "none",
            }}
          >
            Lazy Go Where
          </Typography>
          {user && (
            <Button sx={{ color: "#AA0000" }} onClick={signOut}>
              Sign Out
            </Button>
          )}
        </Box>

        <Typography
          sx={{
            fontSize: "42px",
            fontWeight: "300",
            color: "#000000",
            textAlign: "center",
            paddingBottom: "15px",
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
