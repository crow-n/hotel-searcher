import React, { PureComponent } from 'react';
import { Drawer } from 'antd-mobile';
import { connect } from "react-redux";
import { togglePicBannerDrawer } from '../../actions';
import HeaderCard from '../../components/card/HeaderCard';
import PicCarousel from '../../components/sidebar/PicCarousel';

class HeaderCardAndPicCarousel extends PureComponent {
  state = {
    autoplay: false
  }

  toggleDrawerAndAutoPlayState = () => {
    this.props.togglePicBannerDrawer()
    this.setState(prevState => ({ 
      autoplay: !prevState.autoplay }))
  }

  render() {
    const {
      goBackPath,
      detail,
      isPicBannerDrawerOpen
    } = this.props

    return (<div>
      <HeaderCard goBackPath={goBackPath}
        detail={detail} onClick={this.toggleDrawerAndAutoPlayState} />
      <Drawer
        transitions={false}
        open={isPicBannerDrawerOpen}
        sidebar={
          <PicCarousel
            autoplay={this.state.autoplay}
            pics={detail.pictures.picInfos}
            onClick={this.toggleDrawerAndAutoPlayState}
        />}
      />
    </div>)
  }
}

const mapStateToProps = (state) => {
  const { isPicBannerDrawerOpen } = state.drawerOpenStatus
  return { isPicBannerDrawerOpen }
}

export default connect(
  mapStateToProps,
  { togglePicBannerDrawer }
)(HeaderCardAndPicCarousel)