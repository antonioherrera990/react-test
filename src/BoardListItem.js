import React from 'react';

export default class BoardListItem extends React.Component {
    render() {
        return (
            <div className="board-name">
                {this.props.name}
            </div>
        );
    }
}
