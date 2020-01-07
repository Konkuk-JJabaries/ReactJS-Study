//file :: /src/compoents/CalenderDate.js
import React, { Component } from 'react';

class CalenderDate extends Component{
  render(){
    const dates = Object.values(this.props.value.date).map((t, k) => {
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
