//file:: /src/components/CalenderDetail.js
//달 전체
import React, { Component } from 'react';
import CalenderDate from './CalenderDate';
import "../App.scss"

class CalenderDetail extends Component {
    render() {
        const { dateValue } = this.props;
        const firstDate = new Date(dateValue.getFullYear(), dateValue.getMonth(), 1)
        const lastDate = new Date(dateValue.getFullYear(), dateValue.getMonth()+1, 0)

        //요일(0~7)
        const fstday = firstDate.getDay();
        const lstday = lastDate.getDay();
        const lstDate = lastDate.getDate(); //

        let tmpArr = []
        let tmpLine = 0 //week
        let tmpDict = {}
        //배열
        for(let i = 0 ; i < fstday ; i++) {
            tmpArr.push(0);
        }

        for(let j = 1 ; j < lstDate+1 ; j++){
            tmpLine = Math.floor(j/7);
            if(tmpArr.length === 7){
                tmpDict[tmpLine] = { date: tmpArr };
                tmpArr=[];
            }
            tmpArr.push(j);
        }

        for(let i = 0 ; i < 6 - lstday ; i++){
            tmpArr.push(0);
        }
        tmpDict[tmpLine+1] = { date: tmpArr };
        
        const calenderDate = Object.values(tmpDict).map((t, k)=> {
            return (
                <CalenderDate key = {k} value = {t}></CalenderDate>
            )
        });

        return (
            <table className="calenderDatail">
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
export default CalenderDetail;