import React, { Component } from "react";

class CalendarDate extends Component {
  render() {
    const { date } = this.props.value;
    const dates = date.map((t, k) => {
      return (
        <td key={k} value={t}>
          {t === 0 ? "" : `${t}일`}
        </td>
      );
    });
    return <tr>{dates}</tr>;
  }
}

export default CalendarDate;
