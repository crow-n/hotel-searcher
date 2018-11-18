import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TitleContent extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="title-cnt">
        <span className="title">{this.props.title}</span>
        <p className="cnt">{this.props.value}</p>
      </div>
    )
  }
}

export default TitleContent