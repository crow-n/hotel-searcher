import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";

class HotelCard extends PureComponent {

  render() {
    const hotel = this.props.hotel
    return (
      <Link 
        to={`/hotels/hoteldetail/${hotel.hotelId}`} 
        style={{display:'block'}}
      >
        <div className="hotel-card">
          {/* sketch */}
          <img className="hotel-card-img" 
            src="./img/defaulthotel.jpg" alt=""/>
          <img className="hotel-card-img" src={
            hotel.pictures[0] && 
            hotel.pictures[0].path} alt=""/>

          <div className="hotel-card-info">
            <p className="hotel-card-tit">{hotel.name}</p>
            <p className="hotel-card-address">{hotel.address}</p>
            {
              hotel.facilities.map(facility => (
                <span className="tag" key={facility}>{facility}</span>
              ))
            }
            <div className="hotel-card-footer">
              <span className="hotel-card-star">{hotel.starName}</span>
              <p className="start-price-txt">
                <span className="yuan">￥</span>
                <span className="start-price">{hotel.startPrice}</span>
                起
              </p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}
export default HotelCard