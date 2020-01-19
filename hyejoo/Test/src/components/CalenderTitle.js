//file:: /src/components/CalenderTitle.js
//( 2020년 1월 ) (< 오늘 >)
import React, { Component } from 'react';

class CalenderTitle extends Component{

    render(){
        const { dateValue } = this.props;
        //월은 0월부터
        const headerTitle =  dateValue.getFullYear() + "년" + (dateValue.getMonth() + 1) + "월";
        return(
            <>
                <div className="headerTitle">{headerTitle}</div>
                <div className="headerButtonGroup">
                    <button className="headerButton" onClick = {this.props.moveBeforeMonth}>&lt;</button>
                    <button className="headerToday" onClick = {this.props.moveToday}>오늘</button>
                    <button className="headerButton" onClick = {this.props.moveNextMonth}>&gt;</button>
                </div>
            </>
        );
    }
}
export default CalenderTitle;