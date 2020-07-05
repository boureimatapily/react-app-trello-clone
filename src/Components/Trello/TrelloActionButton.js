import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';

const styles = {
    root:{
        marginTop:10,
    },
}

class TrelloActionButton extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <Container fixed> 
            <Grid container className={classes.root}>
                 
             </Grid>
               
        </Container>
    )
  }
}
export default  withStyles(styles)(TrelloActionButton)