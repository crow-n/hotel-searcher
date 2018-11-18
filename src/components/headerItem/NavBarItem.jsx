import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';

class NavBarItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onClickTitle: PropTypes.func.isRequired,
    backPath: PropTypes.string.isRequired,
  }

  render() {
    const { title, onClickTitle, backPath } = this.props
    return (
      <NavBar className="navbar-item" icon={
        <Link to={backPath}>
          <Icon type="left" color="#fff" style={{ verticalAlign: 'middle' }} />
        </Link>
      }>
        <div onClick={onClickTitle}>
          {title}
          <Icon type="down" size="xxs" />
        </div>
      </NavBar>
    )
  }
}

export default NavBarItem