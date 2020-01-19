import React, { Component } from 'react'
import CalenderTitle from './components/CalenderTitle'
import CalenderDate from './components/CalenderDate';
import CalenderDetail from './components/CalenderDetail';
import './App.scss'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    }
  }
  moveBeforeMonth = () => {
    const { date } = this.state
    date.setMonth(date.getMonth() - 1)
    this.setState = ({
        date: date
    })
    console.log(date)
  }
  moveToday = () => {
      this.setState = ({
          date: new Date()
      })
  }
  moveNextMonth = () => {
      const { date } = this.state
      date.setMonth(date.getMonth() + 1)
      this.setState ({
          date: date
      })
      console.log(date)

  }

  render(){
    return(
      <div className="App">
        <CalenderTitle 
          dateValue = {this.state.date}
          moveBeforeMonth = {this.moveBeforeMonth}
          moveToday = {this.moveToday }
          moveNextMonth = {this.moveNextMonth}
        ></CalenderTitle>
        <CalenderDetail dateValue = {this.state.date}>
        </CalenderDetail>
      </div>
    );
  }
}
export default App;