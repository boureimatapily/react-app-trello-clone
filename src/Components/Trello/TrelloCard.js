import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));

export default function TrelloCard() {
  const classes = useStyles();
 
  return (
    <Card className={classes.root}>
    
      <Typography 
      className={classes.title} 
        color="textSecondary" gutterBottom>
        Word of the Day
      </Typography>
    
  </Card>
  );
}
