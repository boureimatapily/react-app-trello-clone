import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';
import TrelloList from '../Components/Trello/TrelloList';


const styles = {
    root:{
        marginTop:10,
    },
}

class Trello extends React.Component{
 
  render(){
     const { classes } = this.props;
    return(
        <Container fixed> 
            <Grid container className={classes.root}>
                 <TrelloList title="test" />
             </Grid>
               
        </Container>
    )
  }
}
export default  withStyles(styles)(Trello)