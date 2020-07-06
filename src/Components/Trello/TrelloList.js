import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    width: 300,
    height: "100%",
    padding: 8,
    marginRight: 8,
  },
}));

export default function TrelloList({ title, cards, listID, index }) {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={classes.root}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div {...provided.droppableProps}  ref={provided.innerRef}>
                <h4>{title}</h4>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    index={index}
                    text={card.text}
                    id={card.id}
                  />
                ))}
                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
