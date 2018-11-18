import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Drawer } from 'antd-mobile';
import KeyWordSelector from "../../containers/sidebar/KeyWordSelector";
import TwoLevelMenu from "../../containers/sidebar/TwoLevelMenu";

class KeyWordSelectorAndDetail extends PureComponent {
  static propTypes = {
    isKeyWordDrawerOpen: PropTypes.bool.isRequired,
    isKeyWordDetailDrawerOpen: PropTypes.bool.isRequired,
  }

  state = {
    title: '',
    menu: []
  }

  // 点击 "更多"按钮, 打开二级菜单, 并为其设置 标题 和 菜单
  onMore = (title, list) => {
    const menu = list.map((subList, i) => ({
      value: i,
      label: subList.subName,
      children: subList.subProsList.map((item, j) => ({
        value: j,
        label: item
      }))
    }))
    this.setState({ title, menu })
    this.props.toggleKeyWordDetailDrawer()
  }

  render() {
    const { title, menu } = this.state
    const { 
      isKeyWordDrawerOpen,
      isKeyWordDetailDrawerOpen,
    } = this.props

    return (<div>
      {/* 关键字 */}
      <Drawer
        position="right"
        sidebar={<KeyWordSelector onMore={this.onMore} />}
        open={isKeyWordDrawerOpen}
      />
      {/* 关键字 二级菜单 */}
      <Drawer
        position="right"
        sidebar={<TwoLevelMenu title={title} menu={menu} />}
        open={isKeyWordDetailDrawerOpen}
      />
    </div>)
  }
}

export default KeyWordSelectorAndDetail