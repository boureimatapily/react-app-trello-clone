import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TrelloCard from "./TrelloCard";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"gray",
    borderRadius:3,
    width:300,
    padding:8
  },
  
}));

export default function TrelloList({title}) {
  const classes = useStyles();
 
  return (
    <div className={classes.root}>
            <h4>{title}</h4>
            <TrelloCard />
    </div>
  );
}