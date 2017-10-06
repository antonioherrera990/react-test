import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

const options = {
    baseUrl : "https://api.trello.com/1/members/roqueperalta2/",
    apiKey :  "key=e327c3e08523d8b0c0efca2189a7b372",
    token : "&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147",
    idNameFields : "&fields=name,id",
    listFields : "&lists=open&list_fields=id,name"
}


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            selectedBoard : {},
            boards : []
        }
        this.updateSelectedBoard = this.updateSelectedBoard.bind(this);
    }

    componentDidMount(){
        this.getBoards();
    }
    getBoards(){
        let url = options.baseUrl+"boards?"+ options.apiKey +  options.token + options.idNameFields;
        $.get(url,(data) => {
            this.setState({
                selectedBoard: data ? data[0] : {},
                boards: data
            });
        });
    }
    render() {
        return (
            [<BoardList boards={this.state.boards} onClickFunction={this.updateSelectedBoard.bind(this)}/>, <BoardDescriptor board={this.state.selectedBoard}/>]
        );
    }
    updateSelectedBoard(board) {
        //TODO Check whether this set state should go here or in BoardDescriptor to update the view
        console.log(board);
    }
}


function BoardList(props){
    return(
        <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                    {"Boards"}
                </div>
                <div className="card-block">
                    {
                        props.boards.map((board) => {
                            console.log(board);
                            return <BoardName board={board} key={board.id} onclickFunction={props.onClickFunction}/>;
                        })
                    }
                </div>
            </div>
        </div>
    );
}


class BoardDescriptor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            board : {
                id : props.board.id,
                name: props.board.name,
                lists: []
            }
        }
    }
    componentDidMount(){
        this.getLists(this.props.board);
    }
    render(){
        return(
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        {this.state.board.name}
                    </div>
                    <div className="card-block">
                        <div className="row">
                            {
                                this.state.board.lists.map((list) => <List definition={list} key={list.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getLists(board) {
        if(board.id != undefined){
            let url = options.baseUrl+ board.id+ options.idNameFields + options.listFields + options.token +  options.apiKey ;
            $.get(url,(data) => {
                this.setState({
                    board : data
                });
                console.log(data);
            });
        }
    }
}

function List(props){
    return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        {props.definition.name}
                    </div>
                    <div className="card-block">
                        {
                            // props.list.definition.map((act) =>
                            //     <div className="activity" key={act.id}>
                            //         {act.name}
                            //     </div>
                            // )
                        }
                    </div>
                    <div class="card-block">
                        <a href="#" className="card-link" onclick={addCard(props.list)}>Add a card...</a>
                    </div>
                </div>
            </div>
    );
}

function addCard(list){
    console.log(list);
}

function BoardName(props) {
    return (
        <div className="board-name" onClick={props.onclickFunction(props.board)}>
            {props.board.name}
        </div>
    );
}

export default App;
