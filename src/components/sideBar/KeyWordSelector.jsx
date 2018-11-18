import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon, SearchBar, Toast } from "antd-mobile";
import ExpandableCard from "../card/ExpandableCard";


class KeyWordSelector extends PureComponent {
  static propTypes = {
    keyWordChoices: PropTypes.array.isRequired,
    setKeyWords: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    onMore: PropTypes.func.isRequired,
    isFetching: PropTypes.bool,
    errorMessage: PropTypes.string,
  }

  componentWillReceiveProps(newProps) {
    const { isFetching, errorMessage } = newProps
    if(!isFetching && errorMessage) {
      Toast.info(errorMessage, 2)
    }
  }

  render() {
    const { 
      isFetching, 
      keyWordChoices, 
      goBack,
      setKeyWords,
      onMore 
    } = this.props
    
    return (
      <div className={
        "keyword-selector " + 
        (isFetching ? "keyword-selector-fetching" : "")
      }>
        <div className="search-header">
          <Icon className="arrow"
            type="left" color="#fff"
            onClick={goBack} />
          <SearchBar
            placeholder="关键字/位置/品牌/酒店名"
            onSubmit={setKeyWords} />
        </div>
        <div className="card-block">
          {
            keyWordChoices.map(keyword => (
              <ExpandableCard
                key={keyword.filterName}
                title={keyword.filterName}
                list={keyword.filterProsList}
                onSubmit={setKeyWords}
                onMore={onMore} />
            ))
          }
          <div className={
            "fetching-mask " + 
            (isFetching ? "fetching-mask-display" : "")
          }>
            <div className="fetching-label">正在加载...</div>
          </div>
        </div>
      </div>
    )
  }
}
export default KeyWordSelector