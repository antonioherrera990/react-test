import React from 'react';

export default class ListControls extends React.Component{
    constructor(){
        super();
        this.state = {
            isAdding : false
        }
    }
    textInputValue;
    render(){
        if(this.state.isAdding){
            return(
                <div className="panel__footer">
                    <span className="panel__footer__controlDescriptor">Creating a new card:</span>
                    <input className="panel__footer__textInput" placeholder="ENTER saves!" onKeyUp={this.handleKeyPressed.bind(this)} />
                    <a href="#" className="panel__footer__link" onClick={this.cancelEdit.bind(this)}>Cancel</a>
                    <a href="#" className="panel__footer__link" onClick={this.createNewCard.bind(this, this.textInputValue)}>Create</a>
                </div>
            )
        }
        return(
            <div className="panel__footer">
                <a href="#" className="panel__footer__link" onClick={this.handleAddCard.bind(this)}>Add a card...</a>
            </div>
        )
    }
    handleKeyPressed(eventArgs){
        if (eventArgs.keyCode === 13) {
            this.createNewCard(eventArgs.target.value);
        }
        this.textInputValue = eventArgs.target.value;
    }
    createNewCard(name){
        if(name !==undefined && name !== ""){
            this.props.actionHandler(name);
            this.cancelEdit();
        }
    }
    handleAddCard(){
        this.setState({
           isAdding: true
        });
    }
    cancelEdit(){
        this.setState({
            isAdding: false
        });
    }

}