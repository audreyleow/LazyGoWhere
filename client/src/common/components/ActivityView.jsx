import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Button,
  CircularProgress,
  FormControl,
  IconButton,
  MenuItem,
  Rating,
  Select,
  Snackbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import _ from "lodash";
import { useLoadedItinerary } from "../../features/itinerary-drawer/LoadedItineraryProvider";

export default function ActivityView() {
  let { activityId } = useParams();
  const { state: loadedItinerary, dispatch } = useLoadedItinerary();
  const [activity, setActivity] = React.useState();

  const [openingHours, setOpeningHours] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleOpeningHoursChange = (event) => {
    setOpeningHours(event.target.value);
  };

  const getCurrActivitiesNo = () => loadedItinerary.activities.length;

  React.useEffect(() => {
    axios
      .get(`/activities/${activityId}`)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  }, []);

  if (!activity) {
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
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const imageLink = (imageId) => {
    return `https://firebasestorage.googleapis.com/v0/b/lazy-go-where-dev.appspot.com/o/${imageId}.jpeg?alt=media`;
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="You have reached the maximum number of activities you can add. Please
        adjust the number of activities allowed for this itinerary if you wish
        to add another activity!"
        action={action}
      />
      {activity.imageIds.length > 0 ? (
        <img
          src={imageLink(activity.imageIds[0])}
          style={{ height: "350px", width: "100%" }}
        />
      ) : (
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg`}
          style={{ height: "350px", width: "100%" }}
        />
      )}
      <Box sx={{ padding: "20px 140px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                paddingTop: "10px",
                fontSize: "32px",
                fontWeight: "700",
                color: "#000000",
              }}
            >
              {activity.name}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
                fontSize: "16px",
                fontWeight: "200",
                fontFamily: "Roboto",
              }}
            >
              Rating: &nbsp; {activity.rating}
              <Rating
                name="read-only"
                value={activity.rating}
                precision={0.1}
                readOnly
              />
            </Typography>
            <Box sx={{ display: "flex", paddingBottom: "20px" }}>
              {activity.tags.slice(0, 5).map((tag) => (
                <Typography
                  sx={{
                    paddingRight: "10px",
                    fontSize: "16px",
                    fontWeight: "200",
                    fontFamily: "Roboto",
                  }}
                >
                  {tag}
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#159600",
                fontSize: "18px",
                fontWeight: "400",
                textTransform: "none",
              }}
              disabled={
                _.isEmpty(loadedItinerary) ||
                loadedItinerary.activities.some(
                  (stateActivity) => stateActivity._id === activity._id
                )
              }
              onClick={() => {
                if (getCurrActivitiesNo < loadedItinerary.numberOfActivities) {
                  dispatch({ type: "ACTIVITY_ADDED", payload: activity });
                } else {
                  setOpen(true);
                }
              }}
            >
              Add to itinerary
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              paddingBottom: "10px",
              fontSize: "16px",
              fontWeight: "200",
              fontFamily: "Roboto",
            }}
          >
            Address: &nbsp;
            {/* {"#" +
              activity.address.floorNumber +
              "-" +
              activity.address.buildingName +
              activity.address.unitNumber +
              " " + */}
            {activity.address.block +
              " " +
              activity.address.streetName +
              ", " +
              activity.address.postalCode}
          </Typography>
          {activity.businessHour.length > 0 && (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "10px",
                fontSize: "16px",
                fontWeight: "200",
                fontFamily: "Roboto",
              }}
            >
              Opening Hours: &nbsp;
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  displayEmpty
                  value={
                    activity.businessHour[0].openTime +
                    " - " +
                    activity.businessHour[0].closeTime +
                    " (" +
                    _.startCase(activity.businessHour[0].day) +
                    ")"
                  }
                  onChange={handleOpeningHoursChange}
                >
                  {activity.businessHour.map((detail) => (
                    <MenuItem
                      value={
                        detail.openTime +
                        " - " +
                        detail.closeTime +
                        " (" +
                        _.startCase(detail.day) +
                        ")"
                      }
                    >
                      {detail.openTime +
                        " - " +
                        detail.closeTime +
                        " (" +
                        _.startCase(detail.day) +
                        ")"}
                    </MenuItem>
                  ))}
                  {/* {activity.businessHour[0].day === "daily" ? (
                  <>
                    <MenuItem value={10}>
                      {activity.businessHour[0].openTime +
                        " - " +
                        activity.businessHour[0].closeTime +
                        " (" +
                        activity.businessHour[0].day +
                        ")"}
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                  </>
                ) : (
                  <MenuItem value={10}>Ten</MenuItem>
                )} */}
                </Select>
              </FormControl>
            </Typography>
          )}
        </Box>
      </Box>
    </>
  );
}
