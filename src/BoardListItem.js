import React from 'react';

export default class BoardListItem extends React.Component {
    render() {
        return (
            <div className="menu-item" onClick={this.props.clickHandler}>
                {this.props.name}
            </div>
        );
    }
}
