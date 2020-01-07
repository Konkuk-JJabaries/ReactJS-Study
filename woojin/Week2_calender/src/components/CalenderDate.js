//file :: /src/compoents/CalenderDate.js
import React, { Component } from 'react';

class CalenderDate extends Component{
  render(){
    const {value} = this.props
    const dates = Object.values(value.date).map((t, k) => {
        return (
            <td key={k} value={t}>
            { t === 0 ? '':t+'일' }
            </td>
        )
    })
    return (
        <tr>
            { dates }
        </tr>
    );
  }
}
export default CalenderDate;
