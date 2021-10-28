import React, { useEffect, useState } from "react";
import SignIn from "../auth/SignIn";
import { useUser } from "../auth/UserProvider";
import PlanningForm from "./PlanningForm";
import axios from "axios";

export default function NewOutingView() {
  const { user } = useUser();

  const [step, setStep] = useState(!!user ? 1 : 0);
  const [hasExisingItineraries, setHasExisingItineraries] = useState(false);

  useEffect(() => {
    if (user) {
      setStep(1);
      axios
        .get("/users/itineraries", {
          headers: { token: user.token },
        })
        .then((response) => {
          if (response.data.itineraries.length > 0) {
            setHasExisingItineraries(true);
          }
        });
    } else {
      setStep(0);
    }
  }, [user]);

  if (step === 0) {
    return <SignIn setStep={setStep} />;
  } else {
    return <PlanningForm hasExisingItineraries={hasExisingItineraries} />;
  }
}
