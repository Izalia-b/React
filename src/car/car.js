import React from 'react';
import './car.css';
import Radium from 'radium' ;

  
let Car = props =>{

    const inputClasses =['input']

    if(props.name!==''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red')
    }
    
    if(props.name.length > 4){
        inputClasses.push('bold')
    }
     const style ={
        boxShadow:'0 4px 5px 0 rgb(0,0,0,.14)',
        border: '1px solid #ccc',
        ':hover':{
            boxShadow:'0 4px 5px 0 rgb(0,0,0,.25)',
            border: '1px solid #aaa',
        },
        cursor: 'pointer',
     }

    return(
        <div className = 'Car' style= {style}>
            <h3>Car name:{props.name} </h3>
            <p> Year: <strong> {props.year}</strong></p>
            <input 
            type = 'text'
            onChange ={props.onChangeName} 
            value ={props.name}
            className ={ inputClasses.join(' ') } />
            <button onClick = {props.onDelete}>Delete</button>
        </div>
    )
 }

 export default Radium(Car)