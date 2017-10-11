import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card" draggable="true" onDragStart={this.handleDragStart.bind(this)}>
                {this.props.name}
            </div>
        );
    }
    handleDragStart(){
        let card = {
            id : this.props.id,
            name : this.props.name,
            idList : this.props.idList
        }
        this.props.cardDraggedHandler(card);
    }

}
