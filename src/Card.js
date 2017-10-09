import React from 'react';

export default class Card extends React.Component {
    render() {
        return (
            <div className="card" draggable="true" onDragEnd={this.handleDrop.bind(this)}>
                {this.props.name}
            </div>
        );
    }
    handleDrop(){
        this.props.updateHandler(this.props)
    }
}
