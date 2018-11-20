import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RoomCard extends PureComponent {
  static propTypes = {
    room: PropTypes.object.isRequired,
  }

  render() {
    const { room } = this.props
    return (
      <div className="room-card">
        <div className="img-info-box">
          <div className="room-img">
            <img src={room.pictures.pics[0].path} alt="" />
            <span className="pic-num">{room.pictures.picCount} 张</span>
          </div>
          <div className="room-info">
            <p className="room-name">{room.roomNameCn}</p>
            <p>
              <span className="tip">
                {room.area.replace(/平方米/, 'm')}
                <sup>2</sup>
              </span>
              <span className="tip">{room.floor}</span>
            </p>
            <p>
              <span className="tip">{room.isExtraBedNum}</span>
              <span className="tip">{room.bedDescription}</span>
            </p>
            <p>
              <span className="tip">{room.isExtraBed}</span>
            </p>
          </div>
        </div>
        <div className="red-price">
          ￥
          <span className="red-price-strong">{room.roomLowestPrice}</span>
          起
        </div>
      </div>
    )
  }
}
export default RoomCard