import React, { PureComponent } from 'react'
import InfoCard from '../card/InfoCard';
import PicCarousel from './PicCarousel';

const { Item } = InfoCard

class RatePlanDetail extends PureComponent {
  render() {
    const { room, plan } = this.props
    if (!room || !plan) return <div></div>
    return (
      <div className="rate-plan-detail">
        <div className="rate-plan-header">{room.roomNameCn}</div>
        <div className="rate-plan-content" id="ratePlanContent">
          {/* 轮播图 */}
          <PicCarousel pics={room.pictures.pics} inner />
          {/* 简短信息 */}
          <InfoCard>
            <Item title="面积">
              {room.area.replace(/平方米/, 'm')}<sup>2</sup>
              &nbsp;|&nbsp;
            {room.floor}
              &nbsp;|&nbsp;
            可住{room.isExtraBedNum}
            </Item>
            <Item title="早餐">{plan.breakfast}</Item>
            <Item title="床宽">{room.bedDescription}</Item>
            <Item title="无烟">{room.noSmoking}</Item>
            <Item title="宽带">{plan.wifi}</Item>
          </InfoCard>
          {/* 设施 */}
          <InfoCard>{
            room.facilities.map(facility => (
              <Item largeGap titleFixed
                    title={facility.name}
                    key={facility.code}>{
                facility.tmpSubFacilities.map(sub => sub.subName).join('，')
              }</Item>
            ))
          }</InfoCard>
          {/* 政策 */}
          <InfoCard title="酒店费用政策">
            <Item title="加床" largeGap>{room.isExtraBed}</Item>
            {
              plan.cancel &&
              <Item title={plan.cancel.name} vertical>{plan.cancel.desc}</Item>
            }
          </InfoCard>
        </div>
        <div className="rate-plan-footer">
          <div>
            {plan.priceCalendar.length}晚总价：
            <span className="red-price">￥
              <span className="red-price-strong">{
                // * / 1000 处理精度问题
                plan.priceCalendar.reduce((count, datePrice) =>
                  count + datePrice.prices * 1000, 0) / 1000
              }</span>
            </span>
          </div>
          <div className="pay-type">{plan.payType}</div>
        </div>
      </div>
    )
  }
}

export default RatePlanDetail