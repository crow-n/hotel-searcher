import React, { PureComponent } from 'react'
import { Menu } from 'antd-mobile';


class SortOrder extends PureComponent {
  handleChange(selectArr) {
    this.props.setSortCode(selectArr[0])
    this.props.onOpenChange()
  }

  render() {
    return (
      <Menu
        data={this.props.sortCodeMap}
        value={[this.props.sortCode]}
        level={1}
        onChange={(selectArr) => this.handleChange(selectArr)}
        height={180}
      />
    )
  }
}
export default SortOrder