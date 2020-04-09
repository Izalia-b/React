import React from 'react';
import './car.css';
// import Radium from 'radium' ;

class Car extends React.Component{

componentWillReceiveProps(nextProps){
console.log('Car componentWillReceiveProps ',nextProps)
}

shouldComponentUpdate(nextProps,nextState){
    console.log('Car shouldComponentUpdate ',nextProps,nextState)
    return nextProps.name.trim() !== this.props.name.trim()
}

componentWillUpdate(nextProps,nextState){
    console.log('Car componentWillUpdate ',nextProps,nextState)
}

componentDidUpdate(){
    console.log('Car componentDidUpdate ')
}

getSnapshotBeforeUpdate (){
console.log('Car getSnapshotBeforeUpdate')
}

componentWillUnmount(){
    console.log('Car componentWillUnmount ')
}

static getDerivedStateFromProps(nextProps,prevState){
    console.log('Car getDerivedStateFromProps',nextProps)
    return prevState
}

    render(){
        console.log('Car render ')
        const inputClasses =['input']

        if(this.props.name!==''){
            inputClasses.push('green')
        }else{
            inputClasses.push('red')
        }
        
        if(this.props.name.length > 4){
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
                <h3>Car name:{this.props.name} </h3>
                <p> Year: <strong> {this.props.year}</strong></p>
                <input 
                type = 'text'
                onChange ={this.props.onChangeName} 
                value ={this.props.name}
                className ={ inputClasses.join(' ') } />
                <button onClick = {this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

//  export default Radium(Car)
export default Car