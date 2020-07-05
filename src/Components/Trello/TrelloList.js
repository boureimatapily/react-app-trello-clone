import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

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

export default function TrelloList({ title, cards, listID }) {
  const classes = useStyles();

  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef}  className={classes.root}>
          <h4>{title}</h4>
          {cards.map((card) => (
            <TrelloCard key={card.id} text={card.text} id={card.id} />
          ))}
          <TrelloActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
