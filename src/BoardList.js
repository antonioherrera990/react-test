import React from 'react';
import BoardListItem from "./BoardListItem";

export default class BoardList extends React.Component{
    renderListItems(){
        return this.props.boards.map((board) => {
            return <BoardListItem {...board} key={board.id}/>;
        })
    }
    render(){
        return(
            <div className="col-md-3">
                <div className="card">
                    <div className="card-header">
                        {"Boards"}
                    </div>
                    <div className="card-block">
                        {this.renderListItems()}
                    </div>
                </div>
            </div>
        );
    }
}