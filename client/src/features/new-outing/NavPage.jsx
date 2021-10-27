import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignIn from "../auth/SignIn";
import { useUser } from "../auth/UserProvider";
import PlanningForm from "./PlanningForm";
import MainBackgroundLayout from "../../common/components/MainBackgroundLayout";
import { filterOptions } from "../../common/constants/activities-filter-options.contant";
import qs from "qs";
import axios from "axios";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

export default function NavPage() {
  const { user } = useUser();
  const history = useHistory();

  const [step, setStep] = useState(!!user ? 1 : 0);
  const [createNewItinerary, setCreateNewItinerary] = useState();

  if (createNewItinerary) {
    axios
      .get("/users/itineraries", {
        headers: { token: user.token },
      })
      .then((response) => {
        if (response.data.itineraries.length > 0) {
          history.push({
            pathname: "/recommendations",
            search:
              "?" +
              qs.stringify({
                categoryDescriptions: filterOptions,
              }),
          });
        }
      });
  }

  return (
    <MainBackgroundLayout>
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          variant="outlined"
          sx={{ marginTop: "20px", marginBottom: "10px" }}
          onClick={() => {
            setCreateNewItinerary(true);
          }}
        >
          I wish to create a new itinerary!
        </Button>
        <Button
          variant="outlined"
          sx={{ marginTop: "10px", marginBottom: "20px" }}
          onClick={() => {
            setCreateNewItinerary(false);
          }}
        >
          Manage my itineraries
        </Button>
      </Box>
    </MainBackgroundLayout>
  );

  // if (step === 0) {
  //   return <SignIn setStep={setStep} />;
  // } else {
  //   return <PlanningForm />;
  // }
}
