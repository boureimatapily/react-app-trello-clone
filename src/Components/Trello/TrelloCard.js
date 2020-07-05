import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Typography, CardContent } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 8
  },
}));

export default function TrelloCard({ text }) {
  const classes = useStyles();

  return (
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
  );
}
