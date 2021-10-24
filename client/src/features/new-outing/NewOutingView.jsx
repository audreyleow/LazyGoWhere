import React, { useEffect, useState } from "react";
import SignIn from "../auth/SignIn";
import { useUser } from "../auth/UserProvider";
import PlanningForm from "./PlanningForm";

export default function NewOutingView() {
  const { user } = useUser();

  const [step, setStep] =  useState(!!user ? 1 : 0);

  useEffect(() => {
    if (user) {
      setStep(1);
    }
  }, [user]);

  if (step === 0) {
    return <SignIn setStep={setStep} />;
  } else {
    return <PlanningForm />;
  }
}
