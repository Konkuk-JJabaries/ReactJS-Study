import React, { Component } from "react";
import "./App.scss";
import CalendarDetail from "./components/CalendarDetail";
import CalendarTitle from "./components/CalendarTitle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  moveNextMonth = () => {
    const { date } = this.state;
    date.setMonth(date.getMonth() + 1);
    this.setState({
      date
    });
  };

  moveBeforeMonth = () => {
    const { date } = this.state;
    date.setMonth(date.getMonth() - 1);
    this.setState({
      date
    });
  };

  moveToday = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    return (
      <div className="App">
        <CalendarTitle
          dateValue={this.state.date}
          moveNextMonth={this.moveNextMonth}
          moveBeforeMonth={this.moveBeforeMonth}
          moveToday={this.moveToday}
        />
        <CalendarDetail dateValue={this.state.date} />
      </div>
    );
  }
}

export default App;
