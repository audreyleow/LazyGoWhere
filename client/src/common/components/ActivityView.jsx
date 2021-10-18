import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ActivityView() {
  let { activityId } = useParams();
  const [activity, setActivity] = React.useState();

  React.useEffect(() => {
    axios
      .get(`/activities/${activityId}`)
      .then((response) => {
        setActivity(response.data);
      })
      .catch((e) => {
        console.log(e?.response?.data);
      });
  }, []);

  if (!activity) {
    return <p>Loading..</p>;
  }
  console.log(activity);

  return <h3>Requested topic ID: {activityId}</h3>;
}
