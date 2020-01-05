import React, { Component } from 'react';
import CalenderDate from './CalenderDate'
import "../App.scss"

class CalenderDetail extends Component{
  
  render(){
    let last = this.props.last;
    let fstDate = this.props.fstDate;
    let lstDay = this.props.lstDay;

    let tmpArr = []
    let tmpLine = 0
    let tmpDict = {}

    for(let i=0;i<6-fstDate;i++){
      tmpArr.push(0);
    }

    for(let j=1; j<last+1; j++){
      tmpLine = Math.floor(j/7);
      if(tmpArr.length === 7){
        tmpDict[tmpLine] = {date: tmpArr};
        tmpArr = [];
      }
      tmpArr.push(j);
    }
    for(let i=0;i<6-lstDay;i++){
      tmpArr.push(i)
    }
    tmpDict[tmpLine] = {date: tmpArr}
    console.log(tmpDict)
    return (
      <div className="calenderDetail">
        <tr>
          <th>일</th>
          <th>월</th>
          <th>화</th>
          <th>수</th>
          <th>목</th>
          <th>금</th>
          <th>토</th>
        </tr>
        {Object.values(tmpDict).map((t,k) => (
          <CalenderDate key={k} value={t}></CalenderDate>
        ))}
      </div>
    );
  }
}
export default CalenderDetail;
