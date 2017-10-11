import React from 'react';
import './App.css';
import BoardList from './BoardList';
import BoardDescriptor from './BoardDescriptor';
import {options} from './Options';


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            selectedBoard : {
                lists:[]
            },
            boards : []
        }
        this.updateSelectedBoard = this.updateSelectedBoard.bind(this);
    }
    componentDidMount(){
        this.getBoards();
    }
    getBoards(){
        let url = options.baseUrl+ options.boardsUrl + options.and + options.apiKey + options.and + options.token + options.and + options.idNameFields;
        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            return response.json();
        }).then(data => {
            let newBoard = data ? data[0] : this.state.selectedBoard;
            newBoard.lists = [];
            this.setState({
                selectedBoard: newBoard,
                boards: data
            });
        }).catch(function(err) {
            alert("Something went wrong! " +err.message);
        });
    }
    render() {
        return (
                <div className="row">
                    <BoardList boards={this.state.boards} clickHandler={this.updateSelectedBoard}/>
                    <BoardDescriptor board={this.state.selectedBoard}/>
                </div>
        );
    }
    updateSelectedBoard(board) {
        let myState = Object.assign({},this.state);
        myState.selectedBoard = board;
        this.setState(myState);
    }
}

export default App;
