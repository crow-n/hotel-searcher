import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Calendar, Toast } from 'antd-mobile';

class DateSelector extends Component {
  static propTypes = {
    setDate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }

  handleSelect = (date, history) => {
    // 最长可住28天
    const maxDateTime = 1000*60*60*24*28
    // 表示选择了 完整区间
    if(history[0] && !history[1]) {
      let inDate = history[0]
      let outDate = date
      // 正向选择 区间
      if(outDate > inDate) {
        const maxOutDate = new Date(+inDate + maxDateTime)
        if(outDate > maxOutDate) {
          outDate = maxOutDate
          Toast.info('最多只能住28晚!', 2)
        }
      } else {
        let tmpDate = inDate
        inDate = outDate
        outDate = tmpDate
        const minInDate = new Date(+outDate -  maxDateTime)
        if(inDate < minInDate) {
          inDate = minInDate
          Toast.info('最多只能住28晚!', 2)
        }
      }
      this.props.setDate(inDate, outDate)
      // 让 Calendar 组件 调整区间
      return [inDate, outDate]
    }
  }

  render() {
    return (
      <div className="date-selector"> 
        <Calendar 
          visible
          initalMonths={12}
          minDate={new Date()}
          onCancel={this.props.onCancel}
          onSelect={this.handleSelect} /> 
    </div>
    )
  }
}
export default DateSelector