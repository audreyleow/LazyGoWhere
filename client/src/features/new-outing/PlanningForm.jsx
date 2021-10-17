import React, { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import MainBackgroundLayout from "../../common/layouts/MainBackgroundLayout";
import DropdownFeature from "../../common/components/DropdownFeature";
import ActivitiesFilterField from "../../common/components/ActivitiesFilterField";
import qs from "qs";
import axios from "axios";

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

  const activityNo = [1, 2, 3, 4, 5];

  const dayOptions = ["Weekday", "Weekend"];

  const [chosenMRT, setChosenMRT] = useState("");
  const handleMRTChange = (event) => {
    setChosenMRT(event.target.value);
  };
  const [chosenActivityNo, setChosenActivityNo] = useState(null);
  const handleActivityNoChange = (event) => {
    setChosenActivityNo(event.target.value);
  };

  const [day, setDay] = useState(null);
  const handleSetDay = (event) => {
    setDay(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get(
        `/activities?${qs.stringify({
          limit: 5,
          categoryDescriptions: ["Attractions"],
        })}`
      )
      .then((res) => {
        console.log("attrs: ", res.data);
      });

    axios
      .get(
        `/activities?${qs.stringify({
          limit: 5,
          categoryDescriptions: ["Venues"],
        })}`
      )
      .then((res) => {
        console.log("veneues: ", res.data);
      });
  }, []);

  return (
    <>
      <MainBackgroundLayout>
        <Box
          sx={{
            width: "768px",
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
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>How would you like to build your itinerary?</Typography>
            <Box>
              <Button variant="contained" sx={{ backgroundColor: "#B93434" }}>
                BUILD-YOUR-OWN
              </Button>
              <Button variant="contained" sx={{ backgroundColor: "#3459B9" }}>
                AUTO-BUILD
              </Button>
            </Box>
          </Box>
        </Box>
      </MainBackgroundLayout>
    </>
  );
}
