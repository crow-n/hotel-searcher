import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

class ListItem extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
  }

  render() {
    return (
      <div
        className="list-item"
        onClick={this.props.onClick}
      >
        <div className="list-item-cnt">
          {this.props.children}
          <Icon type="right" />
        </div>
      </div>
    )
  }
}

export default ListItem