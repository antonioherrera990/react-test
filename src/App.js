import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

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
        $.get(url,(data) => {
            this.setState({boards : data});
            console.log(data);
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
                            this.state.boards.map((board) => <BoardName value={board.name} key={board.id}/>)
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
            lists : null
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
                        <List />
                    </div>
                </div>
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


export default App;
