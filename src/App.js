import React, { Component } from 'react';
import './App.css';

const options = {
    baseUrl : "https://api.trello.com/1/members/roqueperalta2/",
    apiKey :  "key=e327c3e08523d8b0c0efca2189a7b372",
    token : "&token=fbb3cb59c7c63472fc502a0b65fb79b99e8e5fc1aef520492ccbd9308f56b147"
}

class App extends Component {
  render() {
    return (
        [<BoardList></BoardList>, <BoardDescriptor></BoardDescriptor>]
    );
  }
}

class BoardName extends React.Component {
    render() {
        return (
            <button className="board">
                {/* TODO */}
            </button>
        );
    }
}

class BoardList extends React.Component{
    constructor() {
        super();
        this.state = {
           boards : []
        }
    }
    componentDidMount(){
        this.getBoards();
    }
    getBoards(){
        let url = options.baseUrl+"boards?"+ options.apiKey +  options.token + "&fields=name,id";
        var request = new Request(url, {
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });

        fetch(url).then(response => {
            this.state.boards  = response;
            console.log(response);
        });
    }
    render() {
        return(
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        {"Boards"}
                    </div>
                    <div className="card-block">
                        {
                            this.state.boards.map((board,index) => {
                                <BoardName value={board.name} key="boardName-{index}" />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

}

class BoardDescriptor extends React.Component{
    constructor(){
        super();
        this.state = {
            lists : []
        }
    }
    render(){
        return(
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        {"Board 1"}
                    </div>
                    <div className="card-block">

                    </div>
                </div>
                { //example of how to use loops to render.. i'll use it
                    this.state.lists.map(function(object, index){
                        return <li>{index}</li>;
                    })
                }
            </div>
        );
    }
}

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            activities : []
        }
    }
    render(){
        return(
            <div className="col-md-8">

            </div>
        );
    }
}

function BoardName(props) {
    return (
        <div className="board-name">
            {props.value}
        </div>
    );
}

function getRequest(url,method,contentType){

}

export default App;
