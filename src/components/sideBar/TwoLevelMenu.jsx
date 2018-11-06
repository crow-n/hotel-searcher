import React, { PureComponent } from 'react'
import { NavBar, Icon, Drawer, Menu } from 'antd-mobile';

class TwoLevelMenu extends PureComponent {

  /* 处理 选择动作(
      1.设置 keyWords 为选中的 label)
      2.关闭 父级drawer
      3.关闭 keyWordSelector 父级drawer
  */
  handleChange(selectArr) {
    const keyWords = this.getSelectedLabel(selectArr)
    this.props.setKeyWords(keyWords)
    this.props.onOpenChange()
    if(this.props.onFatherOpenChange) {
      this.props.onFatherOpenChange()
    }
  }

  // 根据 value数组 找到选中的 item 的 label值
  getSelectedLabel(selectArr) {
    const levelOneValue = selectArr[0]
    const levelTwoValue = selectArr[1]
    const levelOneItem = 
      this.findValueInMenu(levelOneValue, this.props.twoLevelMenu)
    const levelTwoItem = 
      this.findValueInMenu(levelTwoValue, levelOneItem.children)
    const keyWords = levelTwoItem.label
    return keyWords
  }
  
  // 根据 value值 找到 menu(不管1级还是2级) 上的 item
  findValueInMenu(value, menu) {
    return menu.reduce(
      (selectedItem, nowItem) => (
        (nowItem.value === value) ? nowItem : selectedItem
    ))
  }

  render() {
    return (
      <Drawer
        position="bottom"
        sidebar={<div>
          <NavBar
            icon={<Icon type="left" />}
            onLeftClick={this.props.onOpenChange} >
            {this.props.title}
          </NavBar>
          <Menu
            value={[0]}
            data={this.props.twoLevelMenu}
            onChange={(selectArr) => this.handleChange(selectArr)}
            // 45 为 NavBar 固定高度
            height={document.documentElement.clientHeight - 45}
          />
        </div>}
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
      >
        <div></div> {/* Drawer规定必须有children, 这里的div只是防报错 */}
      </Drawer>
    )
  }
}
export default TwoLevelMenu