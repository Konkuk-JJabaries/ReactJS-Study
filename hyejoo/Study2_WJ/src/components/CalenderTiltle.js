//file:: /src/components/calenderTitle.js
import React, { Component, Fragment } from 'react';

class CalenderTitle extends Component{
    render(){
        const { date } = this.props;
        return (
            <Fragment>
                <div className = "todayDate">{ date }</div>
                <div className = "calenderTitle">
                    <button className = "arr_btn">&lt;</button>
                    <button className = "today">오늘</button>
                    <button className = "arr_btn">&gt;</button>
                </div>
            </Fragment>
        );
    }
}
export default CalenderTitle;