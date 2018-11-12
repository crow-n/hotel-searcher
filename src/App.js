import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Toast } from "antd-mobile";

import FastSearchPage from "./components/fastSearch/FastSearchPage";
import HotelsResultPage from './components/hotels/HotelsResultPage';
import HotelDetail from './components/hotelDetail/HotelDetail';
import './App.css'

import { getFilter } from "./request/hotel";

class App extends Component {
  constructor(props) {
    super(props)
    const initDate = this.initDate()
    this.state = {
      filter: {
        keyWords: '',
        cityName: '北京',
        page: 0,
        inDate: initDate.nowDate,
        outDate: initDate.nextDate,
        star: [{
          type: "TWO,BUDGET",
          display: "二星及以下/经济",
          selected: false,
        },{
          type: "THREE,CONFORT",
          display: "三星/舒适",
          selected: false,
        },{
          type: "FOUR,HIGHEND",
          display: "四星/高档",
          selected: false,
        },{
          type: "FIVE,LUXURY",
          display: "五星/豪华",
          selected: false,
        },],
        minPrice: '',
        maxPrice: '',
      },
      keywordChoices: [],
    }
  }

  componentDidMount() {
    this.setKeywordChoices(this.state.filter.cityName)
  }

  componentDidUpdate(prevProps, prevState) {
    const cityName = this.state.filter.cityName
    // 城市名 被修改
    if(cityName !== prevState.filter.cityName) {
      this.setKeywordChoices(cityName)
    }
  }

  async setKeywordChoices(cityName) {
    getFilter(cityName)
    .then(keywordChoices => {
      if(typeof keywordChoices !== 'string') {
        this.setState({
          keywordChoices
        })
      } else {
        Toast.info(keywordChoices, 2)
      }
    })
  }

  setCity(cityName) {
    this.setState(prevState => {
      let filter = Object.assign({}, prevState.filter, {cityName, keyWords: ''})
      return {filter}
    })
  }

  formatDate(date) {
    var month = date.getMonth() + 1
    return date.getFullYear()
    + "-"
    + (month >= 10 ? month : "0" + month)
    + "-"
    + (date.getDate() < 10 ? "0" + date.getDate() : date
      .getDate())
  }
  initDate() {
    const nowDate = this.formatDate(new Date())
    const nextDate = this.formatDate(new Date(Date.now() + 1000 * 60 * 60 * 24))
    return {
      nowDate,
      nextDate
    }
  }
  setDate(inDate, outDate) {
    this.setState(prevState => ({
      filter: Object.assign({}, prevState.filter, {
        inDate: this.formatDate(inDate),
        outDate: this.formatDate(outDate)
      })
    }))
  }

  setKeyWords(keyWords) {
    this.setState(prevState => ({
      filter: Object.assign({}, prevState.filter, {
        keyWords
      })
    }))
  }

  setStarAndPrice(star, minPrice, maxPrice) {
    this.setState(prevState => ({
      filter: Object.assign({}, prevState.filter, { star, minPrice, maxPrice })
    }))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() =>
            <FastSearchPage
              filter={this.state.filter}
              keywordChoices={this.state.keywordChoices}
              setCity={city => this.setCity(city)}
              setDate={
                (inDate, outDate) => this.setDate(inDate, outDate)}
              setKeyWords={keyWords => this.setKeyWords(keyWords)}
              setStarAndPrice={
                (star, minPrice, maxPrice) => this.setStarAndPrice(star, minPrice, maxPrice)} />
          } />

          <Route exact path="/hotels" render={() =>
            <HotelsResultPage
              filter={this.state.filter}
              keywordChoices={this.state.keywordChoices}
              setCity={city => this.setCity(city)}
              setDate={
                (inDate, outDate) => this.setDate(inDate, outDate)}
              setKeyWords={keyWords => this.setKeyWords(keyWords)}
              setStarAndPrice={
                (star, minPrice, maxPrice) => this.setStarAndPrice(star, minPrice, maxPrice)} />
          } />

          <Route exact path="/hotels/hoteldetail/:id" render={(route) => 
            <HotelDetail 
              match={route.match}
              inDate={this.state.filter.inDate}
              outDate={this.state.filter.outDate} />
          } />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
