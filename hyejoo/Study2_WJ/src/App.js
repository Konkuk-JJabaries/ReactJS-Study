//file :: /src/App.js
import React, { Component } from 'react';
import CalenderDatail from './components/CalenderDetail'
import CalenderTitle from './components/CalenderTiltle'
import './App.scss';

class App extends Component{
  constructor(props){
    super(props);
    this.date=new Date();
  }
  render(){
    const firstDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1)
    const lastDate = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0)

    //calender는 0월부터 시작
    const todayMonth = this.date.getFullYear() + "년" + (this.date.getMonth()+1)+"월";
    const fstDay = firstDate.getDay();
    const lstDay = lastDate.getDay();
    const lstDate = lastDate.getDate();

    return (
      <div className = "App">
        <CalenderTitle
          date = { todayMonth }
          ></CalenderTitle>
          <CalenderDatail 
          lstDate = { lstDate }
          fstDay = { fstDay }
          lstDay = { lstDay }
          ></CalenderDatail>
      </div>
    );
  }
}
export default App;