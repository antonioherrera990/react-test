import React from 'react';
import List from "./List";
import $ from 'jquery';
import {options} from './Options';

export default class BoardDescriptor extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            id : this.props.board.id,
            name : this.props.board.name,
            lists : []
        }
    }
    componentWillReceiveProps(props){
        this.getLists(props);
    }
    render(){
        return(
            <div className="col-md-9">
                <div className="card">
                    <div className="card-header">
                        {this.props.board.name}
                    </div>
                    <div className="card-block">
                        <div className="row">
                            {
                                this.state.lists.map((list) => <List {...list} key={list.id} updateHandler={this.handleUpdate.bind(this)}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getLists(props) {
        let url = options.baseUrl+ options.listUrl +props.board.id + "?"+ options.idNameFields + options.and + options.listFields + options.and + options.token + options.and + options.apiKey ;
        $.get(url,(data) => {
            let myState = Object.assign({}, this.state);
            myState.lists = data.lists;
            this.setState(myState);
        });
    }
    handleUpdate(idListFrom, idListTo, card){
        console.log(idListTo,idListFrom, card);
    }

}