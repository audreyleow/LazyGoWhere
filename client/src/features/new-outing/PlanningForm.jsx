import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import MainBackgroundLayout from "../../common/components/MainBackgroundLayout";
import DropdownFeature from "../../common/components/DropdownFeature";
import ActivitiesFilterField from "./ActivitiesFilterField";
import RadioFeature from "./RadioFeature";
import qs from "qs";
import axios from "axios";
import {
  activityNo,
  dayOptions,
  filterOptions,
} from "../../common/constants/activities-filter-options.contant";

export default function PlanningForm() {
  const history = useHistory();

  const mrtStations = [
    "Yew Tee",
    "Serangoon",
    "Woodlands",
    "Pungool",
    "Choa Chu Kang",
    "Orchard",
    "Bugis",
    "Downtown",
    "Raffles Place",
    "Changi Airport",
    "Bukit Panjang",
  ];

  const [chosenMRT, setChosenMRT] = useState("");
  const handleMRTChange = (event) => {
    setChosenMRT(event.target.value);
  };
  const [chosenActivityNo, setChosenActivityNo] = useState(null);
  const handleActivityNoChange = (event) => {
    setChosenActivityNo(event.target.value);
  };

  const [day, setDay] = useState("");
  const handleSetDay = (event) => {
    setDay(event.target.value);
  };

  const [buildingOption, setBuildingOption] = useState("BUILD-YOUR-OWN");

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

  // React.useEffect(() => {
  //   if (activitiesSelected["Accomodations"]) {
  //     activitiesSelectedQuery.push("Accomodations");
  //   }
  //   if (activitiesSelected["Attractions"]) {
  //     activitiesSelectedQuery.push("Attractions");
  //   }
  //   if (activitiesSelected["Bars & Clubs"]) {
  //     activitiesSelectedQuery.push("Bars & Clubs");
  //   }
  //   if (activitiesSelected["Events"]) {
  //     activitiesSelectedQuery.push("Events");
  //   }
  //   if (activitiesSelected["Food & Beverages"]) {
  //     activitiesSelectedQuery.push("Food & Beverages");
  //   }
  //   if (activitiesSelected["Tours"]) {
  //     activitiesSelectedQuery.push("Tours");
  //   }
  //   if (activitiesSelected["Venues"]) {
  //     activitiesSelectedQuery.push("Venues");
  //   }
  // }, [activitiesSelected]);

  const onClick = () => {
    history.push({
      pathname: "/recommendations",
      search:
        "?" +
        qs.stringify({
          categoryDescriptions: Object.entries(activitiesSelected)
            .filter(([property, value]) => value)
            .map(([property]) => property),
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
            <DropdownFeature
              DropdownQuestion={`Where would you like to visit?`}
              DropdownCaption={`Select nearest MRT station`}
              DropdownValue={chosenMRT}
              DropdownChangeHandler={handleMRTChange}
              DropdownContent={mrtStations}
            />
          </Box>
          <Box>
            <DropdownFeature
              DropdownQuestion={`Will your outing be on a weekday or weekend?`}
              DropdownCaption={`Select the day of your outing`}
              DropdownValue={day}
              DropdownChangeHandler={handleSetDay}
              DropdownContent={dayOptions}
            />
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3459B9",
                padding: "8px 38px",
                height: "fit-content",
                fontSize: "22px",
                fontWeight: "700",
              }}
              onClick={() => onClick()}
            >
              LET'S GO!
            </Button>
          </Box>
        </Box>
      </MainBackgroundLayout>
    </>
  );
}
