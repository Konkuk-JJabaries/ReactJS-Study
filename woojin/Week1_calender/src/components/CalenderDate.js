import React, { Component } from 'react';

class CalenderDate extends Component{
  render(){
    return (
        <tr>
            {Object.values(this.props.value.date).map((t, k) => (
                <td key={k} value={t}>
                { t === 0 ? '':t+'일' }
                </td>
            ))}
        </tr>
    );
  }
}
export default CalenderDate;
