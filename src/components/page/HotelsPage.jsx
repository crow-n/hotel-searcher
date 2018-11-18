import React, { PureComponent } from 'react';
import { Icon } from 'antd-mobile';
import HeaderFilterForm from '../../containers/combination/HeaderFilterForm';
import HotelList from '../../containers/combination/HotelList';

class HotelsPage extends PureComponent {
  state = {
    showToTop: false
  }

  onScroll = () => {
    if(document.documentElement.scrollTop > 1000) {
      this.setState({ showToTop: true })
    }
  }

  toTop = () => {
    document.documentElement.scrollTop = 0
    this.setState({ showToTop: false })
  }

  render() {
    return (
      <HeaderFilterForm>
        <HotelList onScroll={this.onScroll} />
        <div className={ 
          this.state.showToTop ? "to-top to-top-active" : "to-top" }
          onClick={this.toTop}>
          <Icon type="up" size="lg" color="#666" />
        </div>
      </HeaderFilterForm>
    )
  }
}

export default HotelsPage