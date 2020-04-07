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

   
  return (
    <div style= {divStyle}>
      <h1>{this.state.pageTitel}</h1>
      <input type= 'text' onChange ={this.handleInput}/>
      <button onClick ={this.changeTitelHandler.bind(this,'Changed')}>Change title</button>
      {this.state.cars.map((car,index)=>{
       return(
         <Car 
         key={index}
         name = {car.name}
         year = {car.year}
         onChangeTitle = {()=>this.changeTitelHandler(car.name)}
         />
       )
     })
     }
    </div>
  );
  }
}
export default App;

