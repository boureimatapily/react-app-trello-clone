import React from "react";
import { withStyles } from "@material-ui/styles";
import { Grid, Container, Icon, ListItemIcon, Card, Button } from "@material-ui/core";
import Textarea from 'react-textarea-autosize';
import { addList, addCard } from "../../redux/Actions";
import { connect } from "react-redux";



const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 250,
    paddingLeft: 10,
  },
  formButtonGroup:{
      marginTop: 8,
      display:"flex",
      alignItems: "center"
  }
};

class TrelloActionButton extends React.Component {
    constructor(props){
        super(props)
        this.state={
            formOpen: false,
            text: ""
        }
    }
    openFrom = () =>{
        this.setState({ formOpen: true})
    }
    closeFrom = (e) =>{
        this.setState({ formOpen: false})
    }
    handleChange = e =>{
        this.setState({
            text: e.target.value
        })
    }
    handleAddList = () => {
       const {dispatch} = this.props;
       const {text} = this.state;
       if(text) {
           this.setState({ text: ""})
           dispatch(addList(text))
       }
       return;
    }
    handleAddCard = () =>{
        const {dispatch, listID} = this.props;
       const {text} = this.state;
       if(text) {
        this.setState({ text: ""})
        dispatch(addCard(listID, text));
    }
    return;
    }


    renderForm = () =>{
        const { list } = this.props;
        const placeholder = list ? "Enter list title.." : "Enter title for this card...";
        const buttonTitle = list ? "Add List" : "Add card" 
        return(
            <div>
                <Card 
                style={{
                    overflow: "visible", 
                    minHeight: 80,
                     minWidth: 272, 
                     padding:"6px 8px 2px"}}>
                <Textarea
                placeholder={placeholder} 
                autoFocus
                onBlur={this.closeFrom}
                value={this.state.text}
                onChange={this.handleChange}
                style={{
                    resize: "none",
                    width: '100%',
                    outline: "none",
                    border: "none"
                }}
                />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button variant="contained"
                     onMouseDown={ list ? this.handleAddList : this.handleAddCard }
                     style={{color:"white", backgroundColor:"#5aac44"}}> {buttonTitle} </Button>
                     <Icon style={{marginLeft:8, cursor:"pointer"}}>close</Icon>
                </div>
            </div>
        )
    }
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? " Add another List" : "Add another Card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0, 0, 0, 0.15)" : "inherit";
    return (
      <div
        onClick={this.openFrom}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p> {buttonText} </p>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
export default withStyles(styles)(connect()(TrelloActionButton));
