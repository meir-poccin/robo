import React, {Component} from 'react';


import CardList from './CardList';
//import {robotArray} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Div from './Div';
import Card from './Card';


//const App = () => {


  //class App extends React.Component{
  class App extends Component{
    constructor(){
      super()
      this.state = {
        //robots: robotArray,
        robots:[],
        searchfield: ''
      }
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>  response.json())
      .then(users => this.setState({robots: users}));
      
    }

  change = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  
  render(){
      const filters = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

    })

    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
      
  return(
    <div className='tc'>
       <h1 className='f1'>Robofriends</h1>
       <Div p={this.state.searchfield}/>
       <SearchBox search={this.change}/>
       <Scroll>
      <CardList robo={filters} x={this.state.searchfield} />
      </Scroll>
      </div>
    );
    }
   }
}
export default App;
//<CardList robo={this.state.robotArray} />