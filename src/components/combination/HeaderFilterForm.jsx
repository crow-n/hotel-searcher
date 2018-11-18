import React, { PureComponent } from 'react';
import { SearchBar } from 'antd-mobile';
import NavBarItem from '../headerItem/NavBarItem';
import DropdownItem from '../headerItem/DropdownItem';

class HeaderFilterForm extends PureComponent {
  render() {
    const {
      cityName,
      dateRange,
      keyWords,
      starPriceWords,
      sortOrderWords,
      toggleCityDrawer,
      toggleDateDrawer,
      toggleKeyWordDrawer,
      toggleStarPriceDrawer,
      toggleSortOrderDrawer,
    } = this.props

    return (<div>
      {/* 导航栏 返回主页面 城市选择 */}
      <NavBarItem backPath="/" 
        title={cityName} onClickTitle={toggleCityDrawer} />
      {/* 关键字 选择 */}
      <SearchBar className="header-search-bar"
        placeholder="关键字/位置/品牌/酒店名"
        value={keyWords}
        onFocus={toggleKeyWordDrawer} />
      {/* 固定栏 */}
      <div className="sticky-bar">
        {/* 日期 选择 */}
        <DropdownItem onClick={toggleDateDrawer}>
          {dateRange}
        </DropdownItem>
        {/* 星级/价格 选择 */}
        <DropdownItem placeholder="星级/价格" 
          onClick={toggleStarPriceDrawer}>
          {starPriceWords}
        </DropdownItem>
        {/* 排序 选择 */}
        <DropdownItem onClick={toggleSortOrderDrawer}>
          {sortOrderWords}
        </DropdownItem>
      </div>
      {this.props.children}
    </div>)
  }
}

export default HeaderFilterForm