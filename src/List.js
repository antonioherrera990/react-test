import React from 'react';
import Card from "./Card";
import $ from 'jquery';
import {options} from './Options';
import ListControls from './ListControls';

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            name : props.name,
            cards : []
        }
    }
    componentDidMount(){
        this.getCards();
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.name}
                    </div>
                    <div className="card-block">
                        {this.state.cards.map(card => <Card {...card} key={card.id} />)}
                    </div>
                    <ListControls actionHandler={this.postNewCard.bind(this)}/>
                </div>
            </div>
        );
    }
    getCards() {
        let url = options.baseUrl+ options.cardsUrl +this.state.id + options.cardFields + options.and + options.token + options.and + options.apiKey ;
        $.get(url,(data) => {
            let myState = Object.assign({}, this.state);
            myState.cards = data;
            this.setState(myState);
        });
    }
    postNewCard(cardName){
        cardName = encodeURIComponent(cardName);
        let url = "https://api.trello.com/1/cards?idList="+ this.state.id +"&name=" + cardName + "&key=" + options.apiKey +"&token=" + options.token;
        $.post(url,(data) => {
           console.log(data);
        });
    }
}
