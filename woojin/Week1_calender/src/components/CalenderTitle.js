//file:: /src/components/calenderTitle.js
import React, { Component } from 'react';

class CalenderTitle extends Component{
  state = {
    month : 1
  }

  moveNextMonth = () => {
    const {month} = this.state;
    this.setState({
      month: month + 1
    });
  }

  moveBeforeMonth = () => {
    const {month} = this.state;
    this.setState({
      month: month - 1
    });

  }

  moveToday = () => {
    this.setState({
      month: new Date().getMonth()
    })
  }

  render(){
    return (
      <>
        <div className="todayDate">{this.props.date}</div>
        <div className = "calenderTitle">
          <button className="arr_btn" onClick={this.moveBeforeMonth}>&lt;</button>
          <button className="today" onClick={this.moveToday}>오늘</button>
          <button className="arr_btn" onClick={this.moveNextMonth}>&gt;</button>
        </div>
      </>
    );
  }
}
export default CalenderTitle;
