import React from "react";

const initialState = undefined;
const LoadedItineraryContext = React.createContext(initialState);

export default function LoadedItineraryProvider({ children }) {
  const [isMainDrawerOpen, setIsMainDrawerOpen] = React.useState(false);

  const [state, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case "LOADED_ITINERARY_UPDATED":
        return action.payload;
      case "ACTIVITIES_UPDATED":
        return { ...state, activities: action.payload };
      case "ACTIVITY_REMOVED":
        const newState = {
          ...state,
          activities: state.activities.filter(
            (activity) => activity._id !== action.payload
          ),
        };
        return newState;
      case "ACTIVITY_ADDED":
        setIsMainDrawerOpen(true);
        return {
          ...state,
          activities: [
            ...state.activities.filter(
              // prevent duplicates from being added
              (activity) => activity._id !== action.payload._id
            ),
            action.payload,
          ],
        };
      default:
        throw new Error("Invalid action type");
    }
  }, initialState);

  return (
    <LoadedItineraryContext.Provider
      value={{ state, dispatch, isMainDrawerOpen, setIsMainDrawerOpen }}
    >
      {children}
    </LoadedItineraryContext.Provider>
  );
}

export function useLoadedItinerary() {
  return React.useContext(LoadedItineraryContext);
}
