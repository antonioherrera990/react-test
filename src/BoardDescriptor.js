import React from 'react';
import List from "./List";
import $ from 'jquery';
import {options} from './Options';

export default class BoardDescriptor extends React.Component{
    componentDidMount(){
        this.getLists(this.props.board);
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
                                this.props.board.lists.map((list) => <List definition={list} key={list.id}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    getLists(board) {
        // if(board.id != undefined){
        //     let url = options.baseUrl+ board.id+ options.idNameFields + options.listFields + options.token +  options.apiKey ;
        //     $.get(url,(data) => {
        //         this.setState({
        //             board : data
        //         });
        //         console.log(data);
        //     });
        // }
        return [];
    }
}