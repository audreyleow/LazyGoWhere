import React from "react";
import { useParams } from "react-router-dom";

export default function ActivityView() {
  let { activityId } = useParams();
  return <h3>Requested topic ID: {activityId}</h3>;
}
