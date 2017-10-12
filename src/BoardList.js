import React from 'react';
import BoardListItem from "./BoardListItem";

export default class BoardList extends React.Component{
    renderListItems(){
        return this.props.boards.map((board) => {
            return <BoardListItem {...board} key={board.id} clickHandler={this.props.clickHandler.bind(this,board)} />;
        })
    }
    render(){
        return(
            <div className="left-menu">
                <div className="panel panel--boardList">
                    <div className="panel__header panel_header--boardList">
                        {"Boards"}
                    </div>
                    <div className="panel__body">
                        {this.renderListItems()}
                    </div>
                </div>
            </div>
        );
    }
}