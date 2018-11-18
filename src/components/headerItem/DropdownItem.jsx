import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

class NavBarItem extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.node]
    ),
    placeholder: PropTypes.string,
  }

  render() {
    const { onClick, children, placeholder } = this.props
    return (
      <div className="dropdown-item" onClick={onClick}>
        <div className={"dropdown-item-wrapper " + (children ? "valued" : "")}>
          { children || placeholder }
          <Icon type="down" size="xxs" />
        </div>
      </div>
    )
  }
}

export default NavBarItem