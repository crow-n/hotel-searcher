import React, { PureComponent } from 'react';
import { Icon, Drawer } from 'antd-mobile';

class FilterItem extends PureComponent {
  state = {
    open: false,
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const children = () => {
      switch (this.props.type) {

        case 'title':
          return (<div>
            <span>{this.props.title}</span>
            <p className="value">{this.props.value}</p>
          </div>)

        case 'date':
          return (<div>
            <div className="filter-date">
              <span>入住</span>
              <p className="value">{this.props.startTime}</p>
            </div>
    
            <div className="filter-date-count">
              <span>{this.props.days}</span>
              &nbsp;晚
              </div>
    
            <div className="filter-date">
              <span>离店</span>
              <p className="value">{this.props.endTime}</p>
            </div>
          </div>)

        case 'single':
          return (
            <p className={
              this.props.value ? "single value" : "single"
            }>{
              this.props.value ? this.props.value : this.props.placeholder
            }</p>
          )
      
        default:
          return null
      }
    }

    return (
      <div>
        <Drawer 
          position={this.props.drawerPosition}
          sidebar={
            this.props.render ?
            this.props.render(this.onOpenChange) :
            this.props.sidebar
          } 
          open={this.state.open} 
          onOpenChange={this.onOpenChange}
        >
          <div></div> {/* Drawer规定必须有children, 这里的div只是防报错 */} 
        </Drawer>
        <div
          className="filter-item"
          onClick={this.onOpenChange}
        >
          {children()}
          <Icon className="icon-right" type="right"/>
        </div>
      </div>
    )
  }
}

export default FilterItem