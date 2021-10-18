import React, { useState } from "react";
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
} from "../../common/constants/activities-filter-options.contant";

export default function PlanningForm() {
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

  React.useEffect(() => {
    axios
      .get(
        `/activities?${qs.stringify({
          limit: 5,
          categoryDescriptions: ["Attractions", "Venues"],
        })}`
      )
      .then((res) => {
        // setSuggestions(res.data)
        console.log("attrs: ", res.data);
      });
  }, []);

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
            <ActivitiesFilterField />
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
            >
              LET'S GO!
            </Button>
          </Box>
        </Box>
      </MainBackgroundLayout>
    </>
  );
}
