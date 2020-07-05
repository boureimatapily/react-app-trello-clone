import React from 'react'
import { withStyles } from "@material-ui/styles";
import { Grid, Container } from '@material-ui/core';
import TrelloList from '../Components/Trello/TrelloList';
import { connect } from 'react-redux';
import TrelloActionButton from '../Components/Trello/TrelloActionButton';


const styles = {
    root:{
        display: "flex"
    },
}

class Trello extends React.Component{
 
  render(){
     const { classes, lists } = this.props;
    return(
        <div> 
            <h2>hello Codetrain</h2>
            <div container className={classes.root}>
                 {lists.map(list => <TrelloList key={list.id} title={list.title} cards={list.cards} />)}
                 <TrelloActionButton list />
             </div>
               
        </div>
    )
  }
}
const mapStateToprops = state =>({
            lists: state.lists
})

export default  withStyles(styles)(connect(mapStateToprops)(Trello))