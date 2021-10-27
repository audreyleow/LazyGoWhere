import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Button, FormControl, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MainBackgroundLayout from "../../common/components/MainBackgroundLayout";
import DropdownFeature from "../../common/components/DropdownFeature";
import ActivitiesFilterField from "./ActivitiesFilterField";
import RadioFeature from "./RadioFeature";
import qs from "qs";
import {
  activityNo,
  filterOptions,
} from "../../common/constants/activities-filter-options.contant";
import axios from "axios";
import { useUser } from "../auth/UserProvider";
import { useLoadedItinerary } from "../itinerary-drawer/LoadedItineraryProvider";

export default function PlanningForm({ hasExisingItineraries }) {
  const { user } = useUser();
  const history = useHistory();
  const { dispatch } = useLoadedItinerary();

  useEffect(() => {
    // reset selected itinerary
    dispatch({ type: "LOADED_ITINERARY_UPDATED", payload: undefined });
  }, []);

  const [chosenActivityNo, setChosenActivityNo] = useState(null);
  const handleActivityNoChange = (event) => {
    setChosenActivityNo(event.target.value);
  };

  const [itineraryName, setItineraryName] = useState("");
  const handleItineraryName = (event) => {
    setItineraryName(event.target.value);
  };

  const [buildingOption, setBuildingOption] = useState("BUILD-YOUR-OWN");
  const isAutoBuild = buildingOption === "AUTO-BUILD";

  const handleBuildingOption = (event) => {
    setBuildingOption(event.target.value);
  };

  const [activitiesSelected, setActivitiesSelected] = useState(
    filterOptions.reduce((acc, curr) => ({ ...acc, [curr]: false }), {})
  );

  const handleActivitiesSelected = (event) => {
    setActivitiesSelected((activitiesSelected) => ({
      ...activitiesSelected,
      [event.target.name]: event.target.checked,
    }));
  };

  const onClick = async () => {
    const categoryDescriptions = Object.entries(activitiesSelected)
      .filter(([property, value]) => value)
      .map(([property]) => property);

    if (user) {
      const response = await axios.post(
        `/users/itineraries/init`,
        {
          name: itineraryName,
          numberOfActivities: chosenActivityNo,
          isAutoBuild,
          categoryDescriptions,
        },
        {
          headers: { token: user.token },
        }
      );
    }

    history.push({
      pathname: "/recommendations",
      search:
        "?" +
        qs.stringify({
          categoryDescriptions,
        }),
    });
  };

  return (
    <>
      <MainBackgroundLayout>
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "300",
                color: " #333333",
                paddingTop: "10px",
                paddingBottom: "10px",
                fontFamily: "Roboto",
              }}
            >
              Name your itinerary:
            </Typography>
            <FormControl sx={{ width: "60%" }}>
              <OutlinedInput
                value={itineraryName}
                onChange={handleItineraryName}
              />
            </FormControl>
          </Box>
          <Box>
            <DropdownFeature
              DropdownQuestion={`How many activities would you like?`}
              DropdownCaption={`Select number of activities`}
              DropdownValue={chosenActivityNo}
              DropdownChangeHandler={handleActivityNoChange}
              DropdownContent={activityNo}
            />
          </Box>
          <Box>
            <ActivitiesFilterField
              activitiesSelected={activitiesSelected}
              handleActivitiesSelected={handleActivitiesSelected}
            />
          </Box>
          <Box>
            <RadioFeature
              RadioFeatureQuestion="How would you like to build your itinerary?"
              buildingOption={buildingOption}
              handleBuildingOption={handleBuildingOption}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // marginBottom: "20px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3459B9",
                padding: "8px 38px",
                height: "fit-content",
                fontSize: "22px",
                fontWeight: "700",
              }}
              onClick={onClick}
              disabled={
                itineraryName.trim().length === 0 ||
                !chosenActivityNo ||
                Object.values(activitiesSelected).filter((value) => value)
                  .length <= 0
              }
            >
              LET'S GO!
            </Button>
          </Box>
          {hasExisingItineraries && (
            <>
              <Box
                sx={{
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid grey",
                  lineHeight: "0.1em",
                  margin: "20px 0 20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    background: "#FFFFFF",
                    padding: "0 10px",
                    lineHeight: "0.1em",
                    marginBottom: "-2px",
                  }}
                >
                  OR
                </Typography>
              </Box>
              <Button
                variant="contained"
                component={Link}
                to={{
                  pathname: "/recommendations",
                  search:
                    "?" +
                    qs.stringify({
                      categoryDescriptions: filterOptions,
                    }),
                }}
              >
                Click here to manage your existing itineraries.
              </Button>
            </>
          )}
        </Box>
      </MainBackgroundLayout>
    </>
  );
}
