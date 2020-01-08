import React, { Component } from "react";

class CalendarTitle extends Component {
  render() {
    const { date } = this.props;
    const { p, children } = this.props;
    console.log(p);
    console.log(children);
    return (
      <>
        <div className="todayDate">{date}</div>
        <div className="calendarTitle">
          <button className="arr_btn">&lt;</button>
          <button className="today">오늘</button>
          <button className="arr_btn">&gt;</button>
        </div>
      </>
    );
  }
}

export default CalendarTitle;
