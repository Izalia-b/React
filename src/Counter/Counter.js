import React,{Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';

export default class Counter extends Component{

    state={
        counter:0
    }

    render(){
        return(
        <Auxiliary>
            <h2>Counter {this.state.counter}</h2>
            <button onClick ={()=>{
                this.setState({
                    counter: this.state.counter+1
                })
            }}> + </button>

            <button onClick ={()=>{
                this.setState({
                    counter: this.state.counter-1
                })
            }}> - </button>
        </Auxiliary>
    )
    // return[
    //     <h2 key="1">Counter {this.state.counter}</h2>,
    //     <button  key="2" onClick ={()=>{
    //         this.setState({
    //             counter: this.state.counter+1
    //         })
    //     }}> + </button>,

    //     <button  key="3" onClick ={()=>{
    //         this.setState({
    //             counter: this.state.counter-1
    //         })
    //     }}> - </button>,
    // ]
    }
}