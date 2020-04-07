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
    pageTitel:"React component",
    showCars : false,
  }
  onChangeName (name,index){
    const car = this.state.cars[index] //получили машину на которую нажали инпут
    car.name = name //для нее установили имя из инпут
    const cars = [... this.state.cars] //копия state
    cars[index] = car // из копии взяли машину на которую нажали импут и прировняли к новой машине
    this.setState ({cars}) // заменили
  }

toogleCarsHandler =()=>{
  this.setState({
    showCars : !this.state.showCars
  })
}

deleteHandle(index){
  const cars = this.state.cars.concat()
  cars.splice(index,1)
  this.setState({cars})
}

  render (){
  const divStyle ={
    textAlign: 'center'
  };

  let cars = null 
  if (this.state.showCars){
    cars =this.state.cars.map((car,index)=>{
    return(
      <Car 
      key={index}
      name = {car.name}
      year = {car.year}
      onChangeName = {(event)=>this.onChangeName(event.target.value,index)}
      onDelete= {this.deleteHandle.bind(this,index)}
      />
    )
  }) 
}

  return (
    <div style= {divStyle}>
      <h1>{this.state.pageTitel}</h1>
      
      <button onClick ={this.toogleCarsHandler}>Show cars</button>
      
      {cars}  

    </div>
  );
}
}
export default App;

