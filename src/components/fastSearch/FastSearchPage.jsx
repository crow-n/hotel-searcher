import React, { PureComponent } from 'react';
import { NavBar } from 'antd-mobile';

import FilterForm from "./FilterForm";

class FastSearchPage extends PureComponent {
  render() {
    return (<div>
      <NavBar mode="dark">酒店搜索</NavBar>
      <FilterForm 
        filter={this.props.filter}
        keywordChoices={this.props.keywordChoices}
        setCity={this.props.setCity}
        setDate={this.props.setDate}
        setKeyWords={this.props.setKeyWords}
        setStarAndPrice={this.props.setStarAndPrice} />
    </div>)
  }
}

export default FastSearchPage