import React, { Component } from 'react';
import CalenderDetail from './components/CalenderDetail'
import CalenderTitle from './components/CalenderTitle'
import './App.scss';


class App extends Component{
  constructor(props){
    super(props);
    this.date = new Date();
    this.firstDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
    this.lastDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0)
  }

  render(){
    //calendar 는 0월부터 시작
    let today = this.date.getFullYear() + "년 " + (this.date.getMonth()+1)+"월";
    let lastDay = this.lastDate.getDate();
    return (
      <div className="App"> 
        <CalenderTitle date = { today }></CalenderTitle>
        <CalenderDetail last = { lastDay } fstDate = {this.firstDate.getDay()} lstDay = {this.lastDate.getDay()}></CalenderDetail>
      </div>
    );
  }
}
export default App;
