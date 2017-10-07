import React from 'react';
import './App.css';
import $ from 'jquery';
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
        let url = options.baseUrl+"boards?"+ options.apiKey +  options.token + options.idNameFields;
        $.get(url,(data) => {
            let newBoard = data ? data[0] : this.state.selectedBoard;
            newBoard.lists = [];
            this.setState({
                selectedBoard: newBoard,
                boards: data
            });
        });
    }
    render() {
        return (
                <div className="row">
                    <BoardList boards={this.state.boards} onClickFunction={this.updateSelectedBoard.bind(this)}/>
                    <BoardDescriptor board={this.state.selectedBoard}/>
                </div>
        );
    }
    updateSelectedBoard(board) {
        //TODO Check whether this set state should go here or in BoardDescriptor to update the view
        console.log(board);
    }
}

export default App;
