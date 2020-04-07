import React,{Component} from 'react';
import './App.css';
import Car from './car/car';

class App extends Component{

  state={
    cars:[
      {name:'Ford',year : 2019},
      {name:'Mazda',year : 2018},
      {name:'Audi',year : 2016}
    ],
    pageTitel:"React component"
  }
changeTitelHandler =(newTitel)=>{
 this.setState({
   pageTitel: newTitel
 })
}

handleInput =(event)=>{
  this.setState({
    pageTitel: event.target.value
  })
}
  render (){
  const divStyle ={
    textAlign: 'center'
  };

   const cars = this.state.cars
  return (
    <div style= {divStyle}>
      <h1>{this.state.pageTitel}</h1>
      <input type= 'text' onChange ={this.handleInput}/>
      <button onClick ={this.changeTitelHandler.bind(this,'Changed')}>Change title</button>
      <Car  
      name={cars[0].name} 
      year={cars[0].year}
      onChangeTitle = {this.changeTitelHandler.bind(this,cars[0].name)}/>
      <Car  
      name={cars[1].name} 
      year={cars[1].year}
      onChangeTitle = {()=>this.changeTitelHandler(cars[1].name)}/>
      <Car  
      name={cars[2].name} 
      year={cars[2].year}
      onChangeTitle = {this.changeTitelHandler.bind(this,cars[2].name)}/>
    </div>
  );
  }
}
export default App;

