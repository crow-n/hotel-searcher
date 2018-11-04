import React, { PureComponent } from 'react'

class RoomDetail extends PureComponent {
  render() {
    const room = this.props.room
    const plan = this.props.plan
    return (
      <div className="room-detail">
        <div className="room-detail-tit">{room.roomNameCn}</div>

        <ul className="info-block">
          <li>
            <span className="info-line-tit">面积</span>
            {room.area.replace(/平方米/, 'm')}<sup>2</sup>
            &nbsp;|&nbsp;
            {room.floor}
            &nbsp;|&nbsp;
            可住{room.isExtraBedNum}
          </li>
          <li>
            <span className="info-line-tit">早餐</span>
            {plan.breakfast}
          </li>
          <li>
            <span className="info-line-tit">床宽</span>
            {room.bedDescription}
          </li>
          <li>
            <span className="info-line-tit">无烟</span>
            {room.noSmoking}
          </li>
          <li>
            <span className="info-line-tit">宽带</span>
            {plan.wifi}
          </li>
        </ul>
        
        <ul className="info-block">{
          room.facilities.map(facility => (
            <li key={facility.code}>
              <span className="info-line-label">{facility.name}</span>
              <span className="info-line-cnt">{
                facility.tmpSubFacilities.map(sub => sub.subName).join('，')
              }</span>
            </li>
          ))
        }</ul>
        
        <div className="info-block">
          <div>酒店费用政策</div>

          <span className="info-line-tit">加床</span>
          {room.isExtraBed}

          <div className="info-p">
            <div className="info-line-tit">{plan.cancel.name}</div>
            {plan.cancel.desc}
          </div>
        </div>

        <div className="info-block">
          {plan.priceCalendar.length}晚总价：
          <span className="room-price">￥
            <span className="start-price">{
              plan.priceCalendar.reduce((count,datePrice) => 
                count + datePrice.prices * 1, 0)
            }</span>
          </span>
          <span className="pay-type pay-type-pos">{plan.payType}</span>
        </div>
      </div>
    )
  }
}
export default RoomDetail