import React, { useState, useEffect } from "react";
import SingleItinerary from "./SingleItinerary";
import { useUser } from "../auth/UserProvider";
import axios from "axios";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useLoadedItinerary } from "./LoadedItineraryProvider";
import { useHistory } from "react-router-dom";

export default function ItineraryDrawer() {
  const [itineraryChoice, setItineraryChoice] = useState({ _id: "" });
  const { user, signOut } = useUser();
  const [userItineraries, setUserItineraries] = useState([]);
  const { state: loadedItinerary, dispatch } = useLoadedItinerary();
  const history = useHistory();

  const setLoadedItinerary = (itinerary) => {
    dispatch({
      type: "LOADED_ITINERARY_UPDATED",
      payload: itinerary
        ? userItineraries.find((curr) => curr._id === itinerary._id)
        : undefined,
    });
  };

  const handleSetItineraryChoice = (event) => {
    setItineraryChoice(
      userItineraries.find((item) => item._id === event.target.value)
    );
  };

  useEffect(() => {
    if (user) {
      axios
        .get("/users/itineraries", {
          headers: { token: user.token },
        })
        .then((response) => {
          setUserItineraries(response.data.itineraries);
        });
    }
  }, [user]);

  if (loadedItinerary) {
    return (
      <SingleItinerary
        loadedItinerary={loadedItinerary}
        setLoadedItinerary={setLoadedItinerary}
        setUserItineraries={setUserItineraries}
        userItineraries={userItineraries}
      />
    );
  }

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
        <Typography
          sx={{ fontSize: "24px", fontWeight: "400", fontFamily: "Roboto" }}
        >
          Hi, User!
        </Typography>

        <FormControl sx={{ width: "280px" }}>
          <InputLabel id="itinerary-input">Select itinerary</InputLabel>
          <Select
            labelId="itinerary-input"
            value={itineraryChoice?._id}
            label={itineraryChoice?.name ?? ""}
            onChange={handleSetItineraryChoice}
            autoWidth
          >
            {userItineraries.map((item) => (
              <MenuItem sx={{ width: "280px" }} value={item._id} key={item._id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "300",
            fontFamily: "Roboto",
            paddingTop: "15px",
          }}
        >
          {itineraryChoice?.name &&
            `Current itinerary: ${itineraryChoice.name}`}
        </Typography>
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
            onClick={() => {
              history.push("/");
            }}
          >
            CREATE NEW
          </Button>
          <Button
            disabled={!itineraryChoice}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#3459B9",
              fontSize: "18px",
              fontWeight: "300",
              marginLeft: "5px",
            }}
            onClick={() => {
              setLoadedItinerary(itineraryChoice);
            }}
          >
            LOAD
          </Button>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#AA0000",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "300",
            marginTop: "40px",
            width: "80%",
          }}
          onClick={signOut}
        >
          LOG OUT
        </Button>
      </Box>
    </>
  );
}
