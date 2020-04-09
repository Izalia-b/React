import React,{Component} from 'react';
import './App.scss';
import Car from './car/car';
import ErrorBoundery from './ErrorBoundery/ErrorBoundery';
import Counter from './Counter/Counter';

class App extends Component{

  constructor(props){
    console.log(" App constructor")
    super(props)
    this.state={
      cars:[
        {name:'Ford',year : 2019},
        // {name:'Mazda',year : 2018},
        // {name:'Audi',year : 2016}
      ],
      pageTitel:"React component",
      showCars : false,
    }
  }

 
  onChangeName (name,index){
    const car = this.state.cars[index] //получили машину на которую нажали инпут
    car.name = name //для нее установили имя из инпут
    const cars = [...this.state.cars] //копия стейта
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

    componentWillMount(){
      console.log(" App componentWillMount")
    }

    componentDidMount(){
      console.log("App componentDidMount")
    }

  render (){
    console.log(" App render")

    const divStyle ={
      textAlign: 'center'
  };

    let cars = null 
    if (this.state.showCars){
      cars =this.state.cars.map((car,index)=>{
        return(
          <ErrorBoundery key={index}>
          <Car 
          name = {car.name}
          year = {car.year}
          onChangeName = {(event)=>this.onChangeName(event.target.value,index)}
          onDelete= {this.deleteHandle.bind(this,index)}
          />
          </ErrorBoundery>
        )
      }) 
    }

    return (
      <div style= {divStyle}>
        {/* <h1>{this.state.pageTitel}</h1> */}
        <h1>{this.props.title}</h1>
        <Counter/>
        <hr/>
        <button  style={{marginTop:20}}className={'AppButton'} onClick ={this.toogleCarsHandler}>Show cars</button>
        <div style ={{
          width: 400,
          margin: 'auto',
          paddingTop: 20
        }}>
          {cars}  
        </div>
      </div>
    );
  }
}
export default App;

