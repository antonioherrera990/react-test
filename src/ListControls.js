import React from 'react';

export default class ListControls extends React.Component{
    constructor(){
        super();
        this.state = {
            isAdding : false
        }
    }
    render(){
        if(this.state.isAdding){
            return(
                <div className="card-block">
                    <input placeholder="Please write! ENTER saves" onKeyUp={this.handleKeyPressed.bind(this)} />
                </div>
            )
        }
        return(
            <div className="card-block">
                <a href="#" className="card-link" onClick={this.handleAddCard.bind(this)}>Add a card...</a>
            </div>
        )
    }
    handleKeyPressed(eventArgs){
        if (eventArgs.keyCode == 13) {
            console.log(eventArgs.target.value);
        }
    }
    handleAddCard(){
        this.setState({
           isAdding: true
        });
    }

}