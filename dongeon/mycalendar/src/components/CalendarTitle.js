import React, { Component } from "react";

class CalendarTitle extends Component {
  render() {
    const { dateValue, moveNextMonth, moveBeforeMonth, moveToday } = this.props;
    const year = dateValue.getFullYear();
    const month = dateValue.getMonth();
    return (
      <>
        <div className="todayDate">
          {year}년 {month + 1}월
        </div>
        <div className="calendarTitle">
          <button className="arr_btn" onClick={moveBeforeMonth}>
            &lt;
          </button>
          <button className="today" onClick={moveToday}>
            오늘
          </button>
          <button className="arr_btn" onClick={moveNextMonth}>
            &gt;
          </button>
        </div>
      </>
    );
  }
}

export default CalendarTitle;
