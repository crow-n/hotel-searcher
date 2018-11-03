import React, { PureComponent } from 'react';
import { Drawer } from 'antd-mobile';

class CustomDrawer extends PureComponent {
  state = {
    open: false,
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <div>
        <Drawer 
          position={this.props.position}
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
        {
          this.props.trigger &&
          this.props.trigger(this.onOpenChange)
        }
      </div>
    )
  }
}

export default CustomDrawer