import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardContent } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 8,
  },
}));

export default function TrelloCard({ text, id, index }) {
  const classes = useStyles();

  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div  ref={provided.innerRef}  {...provided.draggableProps} {...provided.dragHandleProps}>  
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {text}
            </Typography>
          </CardContent>
        </Card>
        </div>
      )}
    </Draggable>
  );
}
