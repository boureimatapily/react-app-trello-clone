import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrelloCard from "./TrelloCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#dfe3e6",
    borderRadius:3,
    width:200,
    padding:8,
    marginRight:8
  },
  
}));

export default function TrelloList({title, cards}) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
            <h4>{title}</h4>
            {
                cards.map(card => <TrelloCard key={card.id} text={card.text} />)
            }
    </div>
  );
}