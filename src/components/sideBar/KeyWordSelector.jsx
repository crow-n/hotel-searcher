import React, { PureComponent } from 'react'
import { Icon, SearchBar } from "antd-mobile";

import KeyWordCard from '../card/KeyWordCard';

class KeyWordSelector extends PureComponent {

  handleSearch(value) {
    this.props.setKeyWords(value)
    this.props.onOpenChange()
  }

  render() {
    const keywordChoices = this.props.keywordChoices
    return (
      <div className="keyword-selector">
        <div className="header">
          <Icon className="arrow"
            type="left" color="#fff"
            onClick={this.props.onOpenChange} />
          <SearchBar
            placeholder="关键字/位置/品牌/酒店名"
            onSubmit={(value) => this.handleSearch(value)} />
        </div>
        <div className="card-block">{
          keywordChoices.map(keyword => (
            <KeyWordCard
              className="card"
              key={keyword.filterName}
              title={keyword.filterName}
              list={keyword.filterProsList}
              setKeyWords={this.props.setKeyWords}
              setTwoLevelMenu={this.props.setTwoLevelMenu}
              twoLevelMenuOpenChange={this.props.twoLevelMenuOpenChange}
              onOpenChange={this.props.onOpenChange} />
          ))
        }</div>
      </div>
    )
  }
}
export default KeyWordSelector