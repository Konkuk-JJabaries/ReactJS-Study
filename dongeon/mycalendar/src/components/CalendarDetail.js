import React, { Component } from "react";
import CalendarDate from "./CalendarDate";

class CalendarDetail extends Component {
  render() {
    const { lstDate, fstDay, lstDay } = this.props;
    let tempArr = [];
    let tempLine = 0;
    let tempDict = {};
    for (let i = 0; i < fstDay; i++) {
      tempArr.push(0);
    }
    for (let j = 1; j <= lstDate; j++) {
      tempLine = Math.floor(j / 7);
      if (tempArr.length === 7) {
        tempDict[tempLine] = { date: tempArr };
        tempArr = [];
      }
      tempArr.push(j);
    }
    for (let i = 0; i < 6 - lstDay; i++) {
      tempArr.push(0);
    }
    tempDict[tempLine] = { date: tempArr };

    const calendarDate = Object.values(tempDict).map((value, index) => (
      <CalendarDate key={index} value={value} />
    ));
    return (
      <table className="calendarDetail">
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>{calendarDate}</tbody>
      </table>
    );
  }
}

export default CalendarDetail;
