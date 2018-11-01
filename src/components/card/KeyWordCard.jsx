import React, { PureComponent } from 'react'
import { Icon, Card } from "antd-mobile";

class KeyWordCard extends PureComponent {
  state = {
    cut: true,
  }

  cutOrNot() {
    this.setState(preState => ({
      cut: !preState.cut
    }))
  }

  handleSubmit(keyWords) {
    this.props.setKeyWords(keyWords)
    this.props.onOpenChange()
  }

  listDeepMap(list) {
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
        if(mapList.length === 7) break
      }
      if(j < subList.length) break
    }
    mapList.push('更多...')
    return mapList
  }

  openTwoLevelMenu(title, filter) {
    this.props.setTwoLevelMenu(title, filter)
    this.props.twoLevelMenuOpenChange(this.props.onOpenChange)
  }

  render() {
    return (
      <Card className={this.props.className}>
        <Card.Header
          title={this.props.title}
          // list 没有 子列表, 并且 长度大于8, 才显示 icon
          extra={
            this.props.list && 
            typeof this.props.list[0] === 'string' &&
            this.props.list.length > 8 &&
            <Icon 
              color="#4289ff" 
              type={this.state.cut ? "down" : "up"}
              onClick={() => this.cutOrNot()} />}
        />
        <div className={
          "keyword-card-body " + 
          (this.state.cut ? "keyword-card-body-limit" : "")
        }>{
          // list 是否有 子列表
          this.props.list &&
          this.listDeepMap(this.props.list)
          .map((item, i) => {
            if(item !== "更多...") {
              return <div 
                className="keyword-card-item" 
                onClick={() => this.handleSubmit(item)}
                key={i}>{item}</div>
            } else {
              return <div 
                className="keyword-card-item keyword-card-more" 
                onClick={() => 
                  this.openTwoLevelMenu(this.props.title, this.props.list)
                }
                key={i}>{item}</div>
            }
          })
        }</div>
      </Card>
    )
  }
}
export default KeyWordCard