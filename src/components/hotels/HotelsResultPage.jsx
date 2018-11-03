import React, { Component } from 'react'
import { Icon } from 'antd-mobile';

import HotelList from "./HotelList";
import HeaderForm from './HeaderForm';

class HotelsResultPage extends Component {
  state = {
    sortCode: 1,
  }

  setSortCode(sortCode) {
    this.setState({sortCode})
  }

  processFilter() {
    let {
      keyWords,
      cityName,
      page,
      inDate,
      outDate,
      star,
      minPrice,
      maxPrice,
    } = this.props.filter

    star = star.filter(v => v.selected).reduce((str, el) => str + el.type + ',', '')
    return {
      keyWords,
      cityName,
      page,
      inDate,
      outDate,
      sortCode: this.state.sortCode,
      star,
      minPrice,
      maxPrice,
    }
  }

  handleScroll = (e) => {
    if(!this.longList) {
      this.longList = e.target
    } 
    this.refs.toTop.style.display = 
      e.target.scrollTop > 1000 ?
      'block' : ''
  }

  render() {
    const Body = (props) => (
      <div>
        <HeaderForm
          filter={this.props.filter}
          keywordChoices={this.props.keywordChoices}
          setCity={this.props.setCity}
          setDate={this.props.setDate}
          setKeyWords={this.props.setKeyWords}
          setStarAndPrice={this.props.setStarAndPrice}
          sortCode={this.state.sortCode}
          setSortCode={(sortCode) => this.setSortCode(sortCode)} />

        {props.children}
      </div>
    )
    return (
      <div className="hotel-result-page">
        <HotelList
          filter={this.processFilter()}
          body={Body}
          onScroll={this.handleScroll} />

        <div ref="toTop" 
          className="totop" 
          onClick={() => this.longList.scrollTop = 0}>
          <Icon type="up" size="lg" color="#999" />
        </div>
      </div>
    )
  }
}
export default HotelsResultPage