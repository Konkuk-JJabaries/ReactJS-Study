import React, { Component } from "react";
import "./App.scss";
import CalendarDetail from "./components/CalendarDetail";
import CalendarTitle from "./components/CalendarTitle";

class App extends Component {
  date = new Date();

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { date } = this;
    const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const todayMonth = date.getFullYear() + "년 " + date.getMonth() + 1 + "월";
    const fstDay = firstDate.getDay();
    const lstDay = lastDate.getDay();
    const lstDate = lastDate.getDate();

    return (
      <div className="App">
        <CalendarTitle p={this.date} date={todayMonth}>
          {this.date}
        </CalendarTitle>
        <CalendarDetail lstDate={lstDate} fstDay={fstDay} lstDay={lstDay} />
      </div>
    );
  }
}

export default App;
