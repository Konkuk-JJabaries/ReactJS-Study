//file :: /src/App.js

import React, { Component } from 'react';
import CalenderDetail from './components/CalenderDetail'
import CalenderTitle from './components/CalenderTitle'
import './App.scss';


class App extends Component{
  constructor(props){
    super(props);
    this.date = new Date();
    this.state = {
      month: this.date.getMonth(),
      year: this.date.getFullYear()
    }
  }
  
  moveNextMonth = () => {
    const {month, year} = this.state
    if (month === 11){
      this.setState({
        month: 0,
        year: year+1
      })
    }else{
      this.setState({
        month: month+1,
      })
    }
  }
  moveBeforeMonth = () => {
    const {month, year} = this.state
    if (month === 0){
      this.setState({
        month: 11,
        year: year-1
      })
    }else{
      this.setState({
        month: month-1
      })
    }
  }
  moveToday = () =>{
    this.setState({month: this.date.getMonth()})
  }

  render(){
    //calendar 는 0월부터 시작
    const firstDate = new Date(this.state.year, this.state.month, 1)
    const lastDate = new Date(this.state.year, this.state.month+1, 0)
    const todayMonth = this.state.year + "년 " + (this.state.month+1)+"월";

    const fstDay = firstDate.getDay();
    const lstDate = lastDate.getDate();
    const lstDay = lastDate.getDay();

    return (
      <div className="App"> 
        <CalenderTitle 
          date = { todayMonth }
          moveNextMonth = {this.moveNextMonth}
          moveBeforeMonth = {this.moveBeforeMonth}
          moveToday = {this.moveToday}
        ></CalenderTitle>
        <CalenderDetail 
          lstDate = { lstDate } 
          fstDay = { fstDay } 
          lstDay = { lstDay }
        ></CalenderDetail>
      </div>
    );
  }
}
export default App;
