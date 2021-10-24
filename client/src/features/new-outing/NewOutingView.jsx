import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignIn from "../auth/SignIn";
import { useUser } from "../auth/UserProvider";
import PlanningForm from "./PlanningForm";
import { filterOptions } from "../../common/constants/activities-filter-options.contant";
import qs from "qs";
import axios from "axios";

export default function NewOutingView() {
  const { user } = useUser();
  const history = useHistory();

  const [step, setStep] = useState(!!user ? 1 : 0);

  useEffect(() => {
    if (user) {
      setStep(1);
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
  }, [user]);

  if (step === 0) {
    return <SignIn setStep={setStep} />;
  } else {
    return <PlanningForm />;
  }
}
