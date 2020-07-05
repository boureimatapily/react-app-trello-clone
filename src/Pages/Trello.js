import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';
import TrelloList from '../Components/Trello/TrelloList';
import { connect } from 'react-redux';


const styles = {
    root:{
        marginTop:10,
    },
}

class Trello extends React.Component{
 
  render(){
     const { classes, lists } = this.props;
    return(
        <Container fixed> 
            <Grid container className={classes.root}>
                 {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}
             </Grid>
               
        </Container>
    )
  }
}
const mapStateToprops = state =>({
            lists: state.lists
})

export default  withStyles(styles)(connect(mapStateToprops)(Trello))