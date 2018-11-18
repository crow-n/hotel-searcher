import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from "antd-mobile";

class ExpandableCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onMore: PropTypes.func.isRequired,
  }

  state = {
    expanded: false,
  }

  expandOrNot = () => {
    this.setState(preState => ({
      expanded: !preState.expanded
    }))
  }

  listDeepMap(list) {
    // 如果是 string数组, 直接返回
    if(typeof list[0] === 'string') {
      return list
    }
    const mapList = []
    for (let i = 0; i < list.length; i++) {
      const subList = list[i].subProsList
      let j = 0
      for (; j < subList.length; j++) {
        const item = subList[j]

        mapList.push(item)
        // mapList 最多装 7个, 留下 1个位置 装 '更多...'
        if(mapList.length === 7) break
      }
      if(j < subList.length) break
    }
    mapList.push('更多...')
    return mapList
  }

  render() {
    const { title, list, onSubmit, onMore } = this.props
    const { expanded } = this.state
    return (
      <Card className="expandable-card">
        <Card.Header
          title={title}
          // 样式上为1行4个, 超过2行即超过8个就可展开
          extra={
            typeof list[0] === 'string' &&
            list.length > 8 &&
            <Icon 
              color="#4289ff" 
              type={expanded ? "up" : "down"}
              onClick={this.expandOrNot} />}
        />
        <div className={
          "card-body " + 
          (expanded ? "card-body-expanded" : "")
        }>{
          // list 是否有 子列表
          this.listDeepMap(list)
          .map(item => 
            item !== "更多..."
              ? <div 
                  className="card-item" 
                  onClick={() => onSubmit(item)}
                  key={item}>{item}
                </div>
              : <div 
                  className="card-item card-item-more"
                  onClick={() => onMore(title, list)}
                  key={item}>{item}
                </div>
          )
        }</div>
      </Card>
    )
  }
}
export default ExpandableCard