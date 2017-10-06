import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

const options = {
    baseUrl : "https://api.trello.com/1/members/roqueperalta2/",
    apiKey :  "key=e327c3e08523d8b0c0efca2189a7b372",
    token : "&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147"
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedBoard : {},
            boards : []
        }
    }
    componentDidMount(){
        this.getBoards();
    }
    getBoards(){
        let url = options.baseUrl+"boards?"+ options.apiKey +  options.token + "&fields=name,id";
        $.get(url,(data) => {
            this.setState({
                boards : data,
                selectedBoard: data ? data[0] : {}
            });
        });
    }
    render() {
        return (
            [<BoardList boards={this.state.boards}/>, <BoardDescriptor board={this.state.selectedBoard}/>]
        );
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
                        props.boards.map((board) => <BoardName value={board.name} key={board.id}/>)
                    }
                </div>
            </div>
        </div>
    );
}

function BoardDescriptor(props){
    return(
        <div className="col-md-9">
            <div className="card">
                <div className="card-header">
                    {props.board.name}
                </div>
                <div className="card-block">
                    <div className="row">
                        {
                             //props.lists.map((list) => <List definition={list} key={list.id}/>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
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
                            props.list.definition.map((act) =>
                                <div className="activity" key={act.id}>
                                    {act.name}
                                </div>
                            )
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
        <div className="board-name">
            {props.value}
        </div>
    );
}

export default App;
