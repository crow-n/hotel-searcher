import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import { Icon, Tabs, Toast } from "antd-mobile";
import RoomAccordion from './RoomAccordion';

import CustomDrawer from '../drawer/CustomDrawer'
import PicCarousel from '../sideBar/PicCarousel';
import Map from '../sideBar/Map';

import { getHotelDetail, getRooms } from "../../request/hotel";

const firstImg = (detail, onOpenChange) => (
  <div className="first-img"
    onClick={onOpenChange}
    style={{
      backgroundImage:
        `linear-gradient(transparent 50%,rgba(0,0,0,.5)),
            url(${detail.pictures.picInfos[0].path})`
    }}>
    <Link to="/hotels">
      <div className="back">
        <Icon type="left" />
      </div>
    </Link>
    <div className="name-card">
      <p className="name">{detail.hotelName}</p>
      <span className="des">{detail.decorateDate.match(/\d+(?=-)/)}年装修</span>
      <span className="des">{detail.hotelStarName}</span>
      {/* <span className="des">电话: {detail.hotelTel}</span> */}
    </div>
    <div className="pic-num">{detail.pictures.picCount} 张</div>
  </div>
)

const detailInfo = (detail) => (
  <div className="detail-info">
    <div className="detail-info-tit">酒店详情</div>
    <p>
      <span className="detail-line-tit">电话</span>
      {detail.hotelTel}
    </p>
    <p>
      <span className="detail-line-tit">开张时间</span>
      {detail.debutYear}年
          </p>
    <p>
      <span className="detail-line-tit">房间数</span>
      {detail.roomNum}
    </p>

    <p className="detail-block-tit">交通地点</p>
    <div className="poi-tabs">
      <Tabs
        initialPage={1}
        tabBarPosition="left"
        tabs={
          detail.pois.map((poi) => (
            { title: poi.name }
          ))}
        renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
      >{
          detail.pois.map((poi, i) => (
            <div className="poi-tabs-cnt" key={i}>{
              poi.subPois.map((subPoi, j) => (
                <div className="poi-tabs-line" key={j}>
                  <p>{subPoi.subName}</p>
                  <p className="poi-tabs-distance">{parseInt(subPoi.distance * 100) / 100}公里</p>
                </div>
              ))
            }</div>
          ))
        }</Tabs>
    </div>

    <p className="detail-block-tit">酒店政策</p>
    {
      detail.policy.map((v, i) => (
        <p className="long-p" key={i}>{v.policyName}：{v.policyDesription}</p>
      ))
    }

    <p className="detail-block-tit">酒店介绍</p>
    <p className="long-p">{detail.introduction}</p>
  </div>
)

class HotelDetail extends PureComponent {
  state = {
    detail: null,
    rooms: [],
  }

  componentWillMount() {
    const hotelId = this.props.match.params.id
    const inDate = this.props.inDate
    const outDate = this.props.outDate

    getHotelDetail(hotelId)
      .then(detail => {
        if (typeof detail !== 'string') {
          this.setState({
            detail
          })
        } else {
          Toast.info(detail, 2)
        }
      })

    getRooms({ hotelId, inDate, outDate })
      .then(rooms => {
        if (typeof rooms !== 'string') {
          this.setState({
            rooms
          })
        } else {
          Toast.info(rooms, 2)
        }
      })
  }

  render() {
    const detail = this.state.detail
    const rooms = this.state.rooms
    if (detail === null) return <div></div>

    return (
      <div className="hotel-detail">
        {/* 头图 */}
        <CustomDrawer
          position="right"
          transitions={false}
          render={(handleOpenChange) =>
            <PicCarousel
              pics={detail.pictures.picInfos}
              onOpenChange={handleOpenChange} />}
          trigger={(handleOpenChange) =>
            firstImg(detail, handleOpenChange)
          }
        />
        {/* 地图 */}
        <CustomDrawer
          position="right"
          transitions={false}
          render={(handleOpenChange) =>
            <Map
              lat={detail.location.latitudeGoogle}
              long={detail.location.longitudeGoogle}
              onOpenChange={handleOpenChange} />}
          trigger={(handleOpenChange) =>
            <div className="address-wrapper" onClick={handleOpenChange}>
              <p className="address">{detail.address}</p>
              <i className="iconfont icon-icon_dingwei-mian-copy"></i>
            </div>
          }
        />
        {/* 房间信息 */}
        <RoomAccordion rooms={rooms} />
        {/* 酒店详情 */}
        {detailInfo(detail)}
      </div>
    )
  }
}
export default HotelDetail