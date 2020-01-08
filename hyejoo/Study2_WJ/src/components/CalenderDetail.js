//file :: /src/components/CalenderDatail/js
import React, { Component } from 'react';
import CalenderDate from './CalenderDate'
import "../App.scss"

class CalenderDatail extends Component{
    render() {
        const { lstDate, fstDay, lstDay } = this.props;
        let tmpArr = []
        let tmpLine = 0
        let tmpDict = {}
        for(let i = 0 ; i<fstDay ; i++){
            tmpArr.push(0);
        }
        for(let j = 1 ; j <lstDate+1 ; j++ ){
            tmpLine = Math.floor(j/7);
            if(tmpArr.length === 7){
                tmpDict[tmpLine] = { date : tmpArr };
                tmpArr = [];
            }
            tmpArr.push(j);
        }
        for(let i=0 ; i<6-lstDay ; i++){
            tmpArr.push(0)
        }
        tmpDict[tmpLine+1] = { date: tmpArr }
        const calenderDate = Object.values(tmpDict).map((t,k) => {
            return (
                <CalenderDate key = {k} value = {t}></CalenderDate>
            )
        });

        return (
            <table className="calenderDetail">
                <tbody>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                    { calenderDate }
                </tbody>
            </table>
        );
    }
}
export default CalenderDatail;