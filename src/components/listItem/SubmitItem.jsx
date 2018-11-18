import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd-mobile';

class SubmitItem extends PureComponent {
  static propTypes = {
    path: PropTypes.oneOfType(
      [PropTypes.string.isRequired, PropTypes.object.isRequired]
    ).isRequired,
    value: PropTypes.string.isRequired,
  }

  render() {
    const { path, value } = this.props
    return (
      <div className="submit-item">
        <div className="submit-item-wrapper">
          <Button className="submit-btn">{value}</Button>
          <Link to={path} className="cover-btn-link" />
        </div>
      </div>
    )
  }
}

export default SubmitItem