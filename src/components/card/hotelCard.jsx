import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class HotelCard extends PureComponent {
  static propTypes = {
    hotel: PropTypes.object.isRequired,
  }

  render() {
    const { pictures, name, address, facilities, starName, startPrice } = this.props.hotel
    return (
      <div className="hotel-card">
        <div className="img-box">
          {/* 占位图 */}
          <img className="hotel-card-img"
            src="./img/defaulthotel.jpg" alt="" />
          { pictures[0] &&
            <img className="hotel-card-img" 
            src={ pictures[0].path } alt="" /> }
        </div>
        <div className="info-box">
          <p className="info-tit">{ name }</p>
          <p className="info-address">{ address }</p>
          {
            facilities.map((facility, i) => (
              <span className="facility-tag" key={facility + i}>{ facility }</span>
            ))
          }
          <div className="info-footer">
            <span className="info-star">{ starName }</span>
            <p className="info-price">
              <span className="red-price">
                ￥
                <span className="red-price-strong">{ startPrice }</span>
              </span>
              起
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default HotelCard