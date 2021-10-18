import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Box,
  Button,
  Drawer,
  Toolbar,
  Link,
} from "@mui/material";
import {
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  EditLocationOutlined as EditLocationOutlinedIcon,
} from "@mui/icons-material";
import MainDrawer from "../../features/itinerary-drawer/MainDrawer";

export default function Navbar(props) {
  const LOCATION = "Pioneer";

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDrawer(newOpen);
  };

  const capitalizeFunction = (text) => {
    return text.toUpperCase();
  };

  // const { user, signOut } = useUser();

  // const onClick = () => {
  //   if (user) {
  //     axios.post(
  //       "/users/itineraries",
  //       {
  //         name: "third itenarzzz",
  //         numberOfActivities: 1,
  //         activityIds: [
  //           "002bd9bdfd895924db1b8e7f1cbd07fd431",
  //           "008ab2333d294934eedba5fb9df09eac8a0",
  //           "00205d2e3f23b9642a987806b221e9f735f",
  //         ],
  //       },
  //       { headers: { token: user.token } }
  //     );
  //   }
  // };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              height: "80px",
              padding: "0px 0px 0px 10px !important",
            }}
          >
            <Link
              sx={{
                color: "#3459B9",
                fontFamily: "SingleDayRegular",
                fontSize: "36px",
                fontWeight: "400",
                paddingRight: "10px",
                borderRight: "0.3px solid #000000",
                textDecoration: "none",
              }}
              href="/"
            >
              Lazy Go Where
            </Link>
            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                color: "#000000",
                paddingLeft: "10px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "300",
                  fontFamily: "Roboto",
                }}
              >
                Exploring now: &nbsp;
              </Typography>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                {capitalizeFunction(LOCATION)}
              </Typography>
            </Box>

            <Button
              sx={{
                paddingRight: "10px",
                borderLeft: "0.3px solid #000000",
                borderRight: "0.3px solid #000000",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                },
              }}
              onClick={toggleDrawer(true)}
            >
              <PersonOutlineOutlinedIcon
                sx={{
                  color: "#3459B9",
                  fontSize: "40px",
                }}
              />
            </Button>
            <Button
              sx={{
                paddingLeft: "10px",
                paddingRight: "10px",
                borderRadius: "0px",
                "&:hover": {
                  backgroundColor: "#ffffff",
                  boxShadow: "none",
                },
              }}
            >
              <EditLocationOutlinedIcon
                sx={{ color: "#3459B9", fontSize: "40px" }}
              />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        PaperProps={{
          sx: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <MainDrawer toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
}
