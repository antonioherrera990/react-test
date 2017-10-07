import React from 'react';
import Card from "./Card";

export default class List extends React.Component{
    renderCards(){
        this.props.cards.map(card => <Card name={card.name} key={card.id} />)
    }
    render(){
        return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        {this.props.definition.name}
                    </div>
                    <div className="card-block">
                        {this.renderCards()}
                    </div>
                    <div class="card-block">
                        <a href="#" className="card-link" onclick={this.addCard(this.props.list)}>Add a card...</a>
                    </div>
                </div>
            </div>
        );
    }
    addCard(list){
        console.log(list);
    }
}
