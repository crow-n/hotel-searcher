import React, { PureComponent } from 'react';
import { Toast } from 'antd-mobile';
import HeaderCardAndPicCarousel from '../../containers/combination/HeaderCardAndPicCarousel';
import LocationMap from '../../containers/combination/LocationMap';
import RoomListAndPlanDetail from '../../containers/combination/RoomListAndPlanDetail';
import HotelIntroduction from '../combination/HotelIntroduction';

class HotelDetailPage extends PureComponent {

  componentDidMount() {
    this.props.loadData()
  }

  componentWillReceiveProps(nextProps) {
    const { isFetching, errorMessage } = nextProps
    if(isFetching) {
      Toast.loading('', 0)
    } else if(errorMessage) {
      Toast.info(errorMessage, 2)
    } else {
      Toast.hide()
    }
  }

  render() {
    const {
      hotelDetail,
      match: {
        params: { id }
      }
    } = this.props

    if(!hotelDetail) return <div></div>

    return (<div>
      {/* 头图 和 图片轮播drawer */}
      <HeaderCardAndPicCarousel
        goBackPath="/hotels" detail={hotelDetail} />
      {/* 定位 和 地图 */}
      <LocationMap detail={hotelDetail} />
      {/* 房间列表 和 套餐详情 */}
      <RoomListAndPlanDetail hotelId={id} />
      {/* 酒店余下 详情信息 */}
      <HotelIntroduction detail={hotelDetail} />
    </div>)
  }
}

export default HotelDetailPage
