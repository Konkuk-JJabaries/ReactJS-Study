//file :: /src/App.js

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
    const today = this.date.getFullYear() + "년 " + (this.date.getMonth()+1)+"월";
    const lstDate = this.lastDate.getDate();
    const fstDay = this.firstDate.getDay();
    const lstDay = this.lastDate.getDay();
    return (
      <div className="App"> 
        <CalenderTitle 
          date = { today }
        ></CalenderTitle>
        <CalenderDetail 
          last = { lstDate } 
          fstDate = { fstDay } 
          lstDay = { lstDay }
        ></CalenderDetail>
      </div>
    );
  }
}
export default App;
