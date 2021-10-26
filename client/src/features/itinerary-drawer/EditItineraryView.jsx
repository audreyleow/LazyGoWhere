import React from "react";
import { Box } from "@mui/system";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useLoadedItinerary } from "./LoadedItineraryProvider";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Activity({ activity, index }) {
  return (
    <Draggable draggableId={activity._id} index={index}>
      {(provided) => (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E5E5E5",
            boxShadow: "0px -4px 25px 0px #0000001A",
            padding: "10px 20px",
            border: "1px solid",
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <MenuRoundedIcon sx={{ color: "#3459B9", paddingRight: "5px" }} />{" "}
          {_.startCase(_.camelCase(activity.name))}
        </Box>
      )}
    </Draggable>
  );
}

export default function EditItineraryView() {
  const { state, dispatch } = useLoadedItinerary();

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const activities = reorder(
      state.activities,
      result.source.index,
      result.destination.index
    );

    dispatch({ type: "ACTIVITIES_UPDATED", payload: activities });
  };
  console.log(state);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {state.activities.map((activity, i) => (
              <Activity activity={activity} key={activity._id} index={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
