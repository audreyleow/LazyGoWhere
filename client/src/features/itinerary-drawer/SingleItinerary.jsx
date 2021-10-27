import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import MapImage from "../../assets/images/map_image.png";
import EditItineraryView from "./EditItineraryView";
import axios from "axios";
import { useUser } from "../auth/UserProvider";
import { useLoadedItinerary } from "./LoadedItineraryProvider";
import _ from "lodash";

export default function SingleItinerary({
  loadedItinerary,
  setLoadedItinerary,
  setUserItineraries,
  userItineraries,
}) {
  const { user } = useUser();
  const currActivitiesNo = loadedItinerary.numberOfActivities;
  const [maxActivitiesNo, setMaxActivitiesNo] = useState(currActivitiesNo);
  const handleChange = (event) => {
    setMaxActivitiesNo(event.target.value);
  };
  const { dispatch } = useLoadedItinerary();
  const numberOfActivitiesInLoadedItinerary = userItineraries.find(
    (itinerary) => itinerary._id === loadedItinerary._id
  )?.activities.length;

  const howManyMorePossibleActivites =
    loadedItinerary.numberOfActivities - loadedItinerary.activities.length;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 10px",
        }}
      >
        <img src={MapImage} alt="map" />
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", fontFamily: "Roboto" }}
        >
          Your personal itinerary
        </Typography>

        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "300",
            fontFamily: "Roboto",
            paddingTop: "15px",
            paddingBottom: "25px",
          }}
        >
          {currActivitiesNo} places left to visit. Keep exploring!
        </Typography>
        <Box sx={{ marginBottom: "20px" }}>
          {howManyMorePossibleActivites > 0 && (
            <>
              <Typography>
                Set the number of activities you would like for this itinerary
              </Typography>
              <Box
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "15px",
                }}
              >
                <Select
                  sx={{ marginBottom: "20px" }}
                  value={maxActivitiesNo}
                  onChange={handleChange}
                >
                  {Array.from(
                    { length: howManyMorePossibleActivites },
                    (_, i) => (
                      <MenuItem
                        value={i + loadedItinerary.activities.length + 1}
                      >
                        {i + loadedItinerary.activities.length + 1}
                      </MenuItem>
                    )
                  )}
                </Select>
              </Box>
            </>
          )}
        </Box>
        <EditItineraryView />
        <Button
          variant="contained"
          disabled={
            _.isEmpty(loadedItinerary) ||
            numberOfActivitiesInLoadedItinerary >=
              loadedItinerary.numberOfActivities
          }
          sx={{
            backgroundColor: "#AA0000",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "300",
            marginTop: "40px",
            width: "80%",
          }}
          onClick={async () => {
            const isUpdate = window.confirm(
              "Press ok if you wish to override any possible unsaved changes in order to auto-complete your itinerary."
            );
            if (user && isUpdate) {
              const response = await axios.patch(
                `/users/itineraries/complete/${loadedItinerary._id}`,
                undefined,
                {
                  headers: { token: user.token },
                }
              );

              dispatch({
                type: "LOADED_ITINERARY_UPDATED",
                payload: response.data.itineraries.find(
                  (itinerary) => itinerary._id === loadedItinerary._id
                ),
              });
              setUserItineraries(response.data.itineraries);
            }
          }}
        >
          Auto-complete Itinerary
        </Button>
        <Box sx={{ display: "flex", paddingTop: "40px" }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#B93434",
              fontSize: "18px",
              fontWeight: "300",
              marginRight: "5px",
            }}
            onClick={async () => {
              if (user) {
                const response = await axios.delete(
                  `/users/itineraries/${loadedItinerary._id}`,
                  {
                    headers: { token: user.token },
                  }
                );
                dispatch({
                  type: "LOADED_ITINERARY_UPDATED",
                  payload: undefined,
                });
                setUserItineraries(response.data.itineraries);
                setLoadedItinerary(undefined);
              }
            }}
          >
            Delete Itinerary
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3459B9",
              fontSize: "18px",
              fontWeight: "300",
              marginLeft: "5px",
            }}
            onClick={async () => {
              if (user) {
                const response = await axios.put(
                  `/users/itineraries/${loadedItinerary._id}`,
                  {
                    ...loadedItinerary,
                    activityIds: loadedItinerary.activities.map(
                      (activity) => activity._id
                    ),
                    numberOfActivities: maxActivitiesNo,
                  },
                  {
                    headers: { token: user.token },
                  }
                );

                dispatch({
                  type: "LOADED_ITINERARY_UPDATED",
                  payload: response.data.itineraries.find(
                    (itinerary) => itinerary._id === loadedItinerary._id
                  ),
                });
                setUserItineraries(response.data.itineraries);
              }
            }}
          >
            Save Itinerary
          </Button>
        </Box>
        <Button
          sx={{ marginTop: "20px" }}
          onClick={() => {
            setLoadedItinerary(undefined);
          }}
        >
          Back
        </Button>
      </Box>
    </>
  );
}
