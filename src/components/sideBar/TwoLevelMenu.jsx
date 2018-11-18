import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavBar, Icon, Menu } from 'antd-mobile';

class TwoLevelMenu extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    menu: PropTypes.array.isRequired,
    goBack: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
  }

  handleChange = (selectArr) => {
    const levelOneItem =
      this.findValueInMenu(selectArr[0], this.props.menu)
    const levelTwoItem =
      this.findValueInMenu(selectArr[1], levelOneItem.children)
    const selectedValue = levelTwoItem.label
    this.props.onSelect(selectedValue)
  }

  // 根据 value值 找到 menu(不管1级还是2级) 上的 item
  findValueInMenu(value, menu) {
    return menu.reduce(
      (selectedItem, nowItem) => (
        (nowItem.value === value) ? nowItem : selectedItem
      ))
  }

  render() {
    const { title, menu, goBack } = this.props
    
    return (<div className="two-level-menu">
      <NavBar
        icon={<Icon type="left" />}
        onLeftClick={goBack}>
        {title}
      </NavBar>
      <Menu
        value={[0]}
        data={menu}
        onChange={this.handleChange}
        // 45 为 NavBar 固定高度
        height={document.documentElement.clientHeight - 45}
      />
    </div>)
  }
}
export default TwoLevelMenu