import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';

const styles = {
    root:{
        marginTop:10,
    },
}

class RoomList extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <Container fixed> 
            <Grid container className={classes.root}>
                 <h1> RoomList</h1>
             </Grid>
               
        </Container>
    )
  }
}
export default  withStyles(styles)(RoomList)