import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { NavBar, Icon, SearchBar } from 'antd-mobile';

import CustomDrawer from "../drawer/CustomDrawer";
import CitySelector from "../sideBar/CitySelector";
import DateSelector from "../sideBar/DateSelector";
import StarAndPrice from "../sideBar/StarAndPrice";
import KeyWordSelector from "../sideBar/KeyWordSelector";
import TwoLevelMenu from "../sideBar/TwoLevelMenu";
import SortOrder from "../sideBar/SortOrder";

const sortCodeMap = [
  {
    value: 1,
    label: '推荐优先',
  }, {
    value: 2,
    label: '低价优先',
  }, {
    value: 3,
    label: '高价优先',
  },
]

class HeaderForm extends Component {
  state = {
    open: false,
    twoLevelMenuTitle: '',
    twoLevelMenu: [],
  }

  setTwoLevelMenu(title, filter) {
    const twoLevelMenu = filter.map((subList, i) => ({
      value: i,
      label: subList.subName,
      children: subList.subProsList.map((item, j) => ({
        value: j,
        label: item
      }))
    }))
    this.setState({
      twoLevelMenuTitle: title,
      twoLevelMenu,
    })
  }

  onOpenChange (onFatherOpenChange) {
    this.setState({ open: !this.state.open })
    this.onFatherOpenChange = onFatherOpenChange
  }

  formatStarAndPrice(filter) {
    let { star, minPrice, maxPrice } = filter
    star = star.filter(v => v.selected).map(v => v.display.match(/.+(?=\/)/)).join('、')
    const range = this.displayRange(minPrice, maxPrice)
    return (
      star +
      (star && range ? '、' : '')
      + range
    )
  }

  displayRange(minPrice, maxPrice) {
    if ((minPrice === 0 || minPrice === '') && maxPrice !== '') {
      return `￥${maxPrice} 以下`
    }
    else if ((minPrice !== 0 && minPrice !== '') && maxPrice === '') {
      return `￥${minPrice} 以上`
    }
    else if ((minPrice !== 0 && minPrice !== '') && maxPrice !== '') {
      return `￥${minPrice}-${maxPrice}`
    }
    else {
      return ""
    }
  }

  getSortOrder() {
    const item = sortCodeMap.find(v => v.value === this.props.sortCode)
    if(item) {
      return item.label
    }
  }

  render() {
    const filter = this.props.filter
    const starAndPrice = this.formatStarAndPrice(filter)

    return (<div>
      <Link to="/" ref={el => this.back = el} />
      <NavBar
        icon={<Link to="/">
          <Icon type="left" color="#fff" style={{verticalAlign:'middle'}}/>
        </Link>}
      >
        {/* 城市 选择 */}
        <CustomDrawer
          position="right"
          render={(handleOpenChange) =>
            <CitySelector
              setCity={this.props.setCity}
              onOpenChange={handleOpenChange} />
          }
          trigger={(handleOpenChange) =>
            <div onClick={handleOpenChange}>
              {filter.cityName}
              <Icon type="down" size="xxs" />
            </div>
          }
        />
      </NavBar>
      {/* 关键字 */}
      <CustomDrawer
        position="right"
        render={(handleOpenChange) =>
          <KeyWordSelector
            keywordChoices={this.props.keywordChoices}
            setKeyWords={this.props.setKeyWords}
            setTwoLevelMenu={(title, filter) =>
              this.setTwoLevelMenu(title, filter)}
            onOpenChange={handleOpenChange}
            twoLevelMenuOpenChange={
              (onFatherOpenChange) => this.onOpenChange(onFatherOpenChange)} />
        }
        trigger={(handleOpenChange) =>
          <SearchBar
            className="header-search-bar"
            placeholder="关键字/位置/品牌/酒店名"
            value={filter.keyWords}
            onFocus={handleOpenChange}
            onCancel={() => this.props.setKeyWords('')} />
        }
      />
      {/* 2级菜单, 用于 关键字 详细展示 */}
      <TwoLevelMenu
        title={this.state.twoLevelMenuTitle}
        twoLevelMenu={this.state.twoLevelMenu}
        setKeyWords={this.props.setKeyWords}
        open={this.state.open}
        onOpenChange={() => this.onOpenChange()}
        onFatherOpenChange={this.onFatherOpenChange} />


      <div className="header-filter-line">
        {/* 时间 选择 */}
        <CustomDrawer
          position="bottom"
          render={(handleOpenChange) =>
            <DateSelector
              setDate={this.props.setDate}
              onOpenChange={handleOpenChange} />
          }
          trigger={(handleOpenChange) =>
            <div 
              className="header-filter-item header-filter-item-light"
              onClick={handleOpenChange}>
              {
                filter.inDate.replace(/\d+-/,'')
                + '~' +
                filter.outDate.replace(/\d+-/,'')
              }<Icon type="down" size="xxs" />
            </div>
          }
        />
        {/* 星级/价格 选择 */}
        <CustomDrawer
          position="bottom"
          render={(handleOpenChange) =>
            <StarAndPrice
              star={filter.star}
              minPrice={filter.minPrice}
              maxPrice={filter.maxPrice}
              setStarAndPrice={this.props.setStarAndPrice}
              onOpenChange={handleOpenChange} />
          }
          trigger={(handleOpenChange) =>
            <div  
              className={"header-filter-item " + 
                (starAndPrice ? 'header-filter-item-light' : '')}
              onClick={handleOpenChange}>
              {
                starAndPrice ? starAndPrice : '星级/价格'
              }<Icon type="down" size="xxs" />
            </div>
          }
        />
        {/* 排序 */}
        <CustomDrawer
          position="bottom"
          render={(handleOpenChange) =>
            <SortOrder
              sortCode={this.props.sortCode}
              sortCodeMap={sortCodeMap}
              setSortCode={this.props.setSortCode}
              onOpenChange={handleOpenChange} />
          }
          trigger={(handleOpenChange) =>
            <div  
              className="header-filter-item header-filter-item-light"
              onClick={handleOpenChange}>
              {
                this.getSortOrder()
              }<Icon type="down" size="xxs" />
            </div>
          }
        />
        
      </div>
    </div>)
  }
}
export default HeaderForm