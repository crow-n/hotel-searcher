import React, { PureComponent } from 'react'
import { NavBar, SearchBar, Accordion, List, Icon } from "antd-mobile";

import { cities } from "../../request/hotel";

class CitySelector extends PureComponent {
  state = {
    cities
  }

  handleSelectOrSearch(city) {
    this.props.setCity(city)
    this.props.onOpenChange()
  }

  render() {
    return (
      <div className="city-selector">
        <NavBar 
          icon={<Icon type="left" />}
          onLeftClick={this.props.onOpenChange} >
          选择城市
        </NavBar>
        <SearchBar 
          placeholder="手动输入城市"
          onSubmit={(city) => this.handleSelectOrSearch(city)} />
        <Accordion>{
          this.state.cities.map(group => (
            <Accordion.Panel header={group.letter} key={group.letter}>
              <List>{
                group.list.map(city => (
                  <List.Item 
                    className="list-item" 
                    key={city}
                    onClick={() => this.handleSelectOrSearch(city)}>
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