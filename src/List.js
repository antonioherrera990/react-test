import React from 'react';
import Card from "./Card";
import {options} from './Options';
import ListControls from './ListControls';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            name : props.name,
            cards : props.cards
        }
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.name}
                    </div>
                    <div className={"card-block " + options.listSelector} onDrop={this.handleDroppedCard.bind(this)} onDragOver={(e) => e.preventDefault()} >
                        {this.state.cards.map(card => <Card {...card}  key={card.id} cardDraggedHandler={this.handleCardDrag.bind(this)} />)}
                    </div>
                    <ListControls actionHandler={this.postNewCard.bind(this)}/>
                </div>
            </div>
        );
    }
    postNewCard(cardName){
        cardName = encodeURIComponent(cardName);
        let url = "https://api.trello.com/1/cards?idList="+ this.state.id +"&name=" + cardName + "&" + options.apiKey +"&" + options.token;
        fetch(url, {
            method: 'POST',
        }).then((response) => {
            return response.json();
        }).then(data => {
            this.addNewCard(data);
        }).catch(function(err) {
            alert("Something went wrong! " +err.message);
        });
    }
    addNewCard(cardData){
        let myState = Object.assign({}, this.state);
        let newCard = {
            id: cardData.id,
            name : cardData.name
        };
        myState.cards.push(newCard);
        this.setState(myState);
    }
    handleCardDrag(card) {
        this.props.cardDraggedHandler(card);
    }
    handleDroppedCard(){
        this.props.handleDroppedCard(this.props.id);
    }


}
