import React, { PureComponent } from 'react';
import { NavBar } from 'antd-mobile';
import ListItem from '../listItem/ListItem';
import TitleContent from '../listItem/TitleContent';
import DateRangeContent from '../listItem/DateRangeContent';
import PlaceHolderContent from '../listItem/PlaceHolderContent';
import SubmitItem from '../listItem/SubmitItem';

class FastSearchPage extends PureComponent {
  render() {
    const {
      cityName,
      inDate,
      outDate,
      days,
      keyWords,
      starPriceWords,
      toggleCityDrawer,
      toggleDateDrawer,
      toggleKeyWordDrawer,
      toggleStarPriceDrawer
    } = this.props

    return (<div>
      <NavBar mode="dark">酒店搜索</NavBar>
      {/* 城市 选项 */}
      <ListItem onClick={toggleCityDrawer}>
        <TitleContent title="目的地" value={cityName} />
      </ListItem>
      {/* 日期 选项 */}
      <ListItem onClick={toggleDateDrawer}>
        <DateRangeContent
          startTitle="入住" endTitle="离店"
          startDate={inDate} endDate={outDate} days={days} />
      </ListItem>
      {/* 关键字 选项 */}
      <ListItem onClick={toggleKeyWordDrawer}>
        <PlaceHolderContent
          placeholder="关键字/位置/品牌/酒店名" value={keyWords} />
      </ListItem>
      {/* 星级/价格 选项 */}
      <ListItem onClick={toggleStarPriceDrawer}>
        <PlaceHolderContent
          placeholder="星级/价格" value={starPriceWords} />
      </ListItem>
      {/* 提交 */}
      <SubmitItem value="查询" path="/hotels" />
    </div>)
  }
}

export default FastSearchPage