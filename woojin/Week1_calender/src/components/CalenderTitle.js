import React, { Component } from 'react';

class CalenderTitle extends Component{
  render(){
    return (
      <>
        <div className="todayDate">{this.props.date}</div>
        <div className = "calenderTitle">
          <button className="arr_btn">&lt;</button>
          <button className="today">오늘</button>
          <button className="arr_btn">&gt;</button>
        </div>
      </>
    );
  }
}
export default CalenderTitle;
