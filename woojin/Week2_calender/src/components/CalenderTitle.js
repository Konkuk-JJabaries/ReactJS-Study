//file:: /src/components/calenderTitle.js
import React, { Component } from 'react';

class CalenderTitle extends Component{
  moveNextMonth = () => {
    this.props.moveNextMonth();
  }

  moveBeforeMonth = () => {
    this.props.moveBeforeMonth();
  }

  moveToday = () => {
    this.props.moveToday();
  }

  render(){
    const { date } = this.props;
    return (
      <>
        <div className="todayDate">{ date }</div>
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
