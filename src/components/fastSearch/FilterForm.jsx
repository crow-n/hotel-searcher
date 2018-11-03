import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd-mobile';

import FilterItem from "./FilterItem";
import CitySelector from "../sideBar/CitySelector";
import DateSelector from "../sideBar/DateSelector";
import KeyWordSelector from '../sideBar/KeyWordSelector';
import StarAndPrice from '../sideBar/StarAndPrice';
import TwoLevelMenu from '../sideBar/TwoLevelMenu';

class FilterForm extends Component {
  state = {
    open: false,
    twoLevelMenuTitle: '',
    twoLevelMenu: [],
  }

  formatDate(date) {
    const dateArr = date.split('-')
    return dateArr[1] + '月' + dateArr[2] + '日'
  }

  countDays(inDate, outDate) {
    // 解决 谷歌 计算时间的 误差
    return Math.round(
      (new Date(outDate).getTime() - new Date(inDate).getTime())
      / (1000 * 60 * 60 * 24)
    )
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

  formatStarAndPrice(star, minPrice, maxPrice) {
    star = star.filter(v => v.selected).map(v => v.display).join('、')
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

  onOpenChange (onFatherOpenChange) {
    this.setState({ open: !this.state.open })
    this.onFatherOpenChange = onFatherOpenChange
  }

  render() {
    const {
      keyWords,
      cityName,
      inDate,
      outDate,
      star,
      minPrice,
      maxPrice,
    } = this.props.filter

    return (
      <div className="filter-form">
        {/* 城市 选择 */}
        <FilterItem
          type="title"
          title="目的地"
          value={cityName}

          drawerPosition="right"
          render={(handleOpenChange) =>
            <CitySelector
              setCity={this.props.setCity}
              onOpenChange={handleOpenChange} />
          }
        />
        {/* 时间 选择 */}
        <FilterItem
          type="date"
          startTime={this.formatDate(inDate)}
          days={this.countDays(inDate, outDate)}
          endTime={this.formatDate(outDate)}

          drawerPosition="bottom"
          render={(handleOpenChange) =>
            <DateSelector
              setDate={this.props.setDate}
              onOpenChange={handleOpenChange} />
          }
        />
        {/* 关键字 */}
        <FilterItem
          type="single"
          placeholder="关键字/位置/品牌/酒店名"
          value={keyWords}

          drawerPosition="right"
          render={(handleOpenChange) =>
            <KeyWordSelector
              keywordChoices={this.props.keywordChoices}
              setKeyWords={this.props.setKeyWords}
              setTwoLevelMenu={(title, filter) => 
                this.setTwoLevelMenu(title, filter)}
              onOpenChange={handleOpenChange}
              twoLevelMenuOpenChange={
                (onFatherOpenChange) => this.onOpenChange(onFatherOpenChange)} />}
        />
        {/* 星级 价格 */}
        <FilterItem
          type="single"
          placeholder="星级/价格"
          value={this.formatStarAndPrice(star, minPrice, maxPrice)}

          drawerPosition="bottom"
          render={(handleOpenChange) =>
            <StarAndPrice
              star={this.props.filter.star}
              minPrice={this.props.filter.minPrice}
              maxPrice={this.props.filter.maxPrice}
              setStarAndPrice={this.props.setStarAndPrice}
              onOpenChange={handleOpenChange} />
          }
        />
        {/* 提交 */}
        <div className="filter-btn">
          <Link to="/hotels">
            <Button className="search-btn">查询</Button>
          </Link>
        </div>
        {/* 2级菜单, 用于 关键字 详细展示 */}
        <TwoLevelMenu
          title={this.state.twoLevelMenuTitle}
          twoLevelMenu={this.state.twoLevelMenu}
          setKeyWords={this.props.setKeyWords}
          open={this.state.open}
          onOpenChange={() => this.onOpenChange()}
          onFatherOpenChange={this.onFatherOpenChange} />
      </div>
    )
  }
}

export default FilterForm