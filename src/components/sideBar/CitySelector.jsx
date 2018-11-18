import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavBar, SearchBar, Accordion, List, Icon } from "antd-mobile";
import { cities } from "../../request/hotel";

class CitySelector extends PureComponent {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
    setCity: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="city-selector">
        <NavBar 
          icon={<Icon type="left" />}
          onLeftClick={this.props.goBack} >
          选择城市
        </NavBar>
        <SearchBar 
          placeholder="手动输入城市"
          onSubmit={this.props.setCity} />
        <Accordion 
          className="city-list">
        {
          cities.map(group => (
            <Accordion.Panel header={group.letter} key={group.letter}>
              <List>{
                group.list.map(city => (
                  <List.Item 
                    key={city}
                    onClick={() => this.props.setCity(city)}>
                    {city}
                  </List.Item>
                ))
              }</List>
            </Accordion.Panel>
          ))
        }</Accordion>
      </div>
    )
  }
}
export default CitySelector