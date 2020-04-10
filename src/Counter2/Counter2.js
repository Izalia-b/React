import React,{Component} from 'react';
import {ClickedContext} from '../App';

export default (props) =>{
    return(
        <div style = {{
            margin:'0 auto',
            border: '1px solid #ccc',
            width:200
        }}>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Cliked</p> : null }
            </ClickedContext.Consumer>
            
        </div>
    )
}