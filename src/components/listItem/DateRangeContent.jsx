import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class DateRangeContent extends PureComponent {
  static propTypes = {
    startTitle: PropTypes.string.isRequired,
    endTitle: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
  }

  render() {
    const { startTitle, endTitle, startDate, endDate, days } = this.props
    return (
      <div className="date-range-cnt">
        <div className="date-with-title">
          <span className="title">{startTitle}</span>
          <p className="date">{startDate}</p>
        </div>

        <div className="count-days">
          <span className="days">{days}</span>
          &nbsp;晚
        </div>

        <div className="date-with-title">
          <span className="title">{endTitle}</span>
          <p className="date">{endDate}</p>
        </div>
      </div>
    )
  }
}

export default DateRangeContent