import React, { PureComponent } from 'react';
import { Drawer } from 'antd-mobile';
import CitySelector from '../../containers/sidebar/CitySelector';
import DateSelector from '../../containers/sidebar/DateSelector';
import KeyWordSelectorAndDetail from '../../containers/combination/KeyWordSelectorAndDetail';
import StarAndPrice from '../../containers/combination/StarPriceWidthState';
import SortOrder from '../../containers/sidebar/SortOrder';

class DrawerContainer extends PureComponent {
  render() {
    const { 
      isCityDrawerOpen,
      isDateDrawerOpen,
      isStarPriceDrawerOpen,
      isSortOrderDrawerOpen,
      toggleDateDrawer, 
      toggleStarPriceDrawer,
      toggleSortOrderDrawer
    } = this.props

    return (<div>
      {/* 城市 Drawer */}
      <Drawer
        position="right"
        sidebar={<CitySelector />}
        open={isCityDrawerOpen}
      />
      {/* 日期 Drawer */}
      <Drawer
        position="bottom"
        sidebar={<DateSelector />}
        open={isDateDrawerOpen}
        onOpenChange={toggleDateDrawer}
      />
      {/* 关键字 及 二级菜单 Drawer组合体 */}
      <KeyWordSelectorAndDetail />
      {/* 星级/价格 Drawer */}
      <Drawer
        position="bottom"
        sidebar={<StarAndPrice />}
        open={isStarPriceDrawerOpen}
        onOpenChange={toggleStarPriceDrawer}
      />
      {/* 排序 Drawer */}
      <Drawer
        position="bottom"
        sidebar={<SortOrder />}
        open={isSortOrderDrawerOpen}
        onOpenChange={toggleSortOrderDrawer}
      />
    </div>)
  }
}

export default DrawerContainer