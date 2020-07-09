import React from "react";
import { withStyles } from "@material-ui/styles";
import TrelloList from "../Components/Trello/TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "../Components/Trello/TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../redux/Actions";

const styles = {
  root: {
    display: "flex",
  },
};

class Trello extends React.Component {
  onDragEnd = (result) => {
    const { destination, source, draggableId, type} = result;

    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        
      )
    );
  };

  render() {
    const { classes, lists } = this.props;

    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
       <div>  
          <h2>hello Codetrain</h2> 
              <div container className={classes.root}>
                {lists.map((list, index) => (
                  <TrelloList
                    key={list.id}
                    listID={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                ))}
               
                <TrelloActionButton list />
              </div>
          </div>
      </DragDropContext>
    );
  }
}
const mapStateToprops = (state) => ({
  lists: state.lists,
});

export default withStyles(styles)(connect(mapStateToprops)(Trello));
