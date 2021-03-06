import React, { PureComponent } from 'react'
import InfoCard from '../card/InfoCard';
import TabCard from '../card/TabCard';

const { Item } = InfoCard

function calcDistance(distance) {
  if(typeof distance !== "number") distance *= 1
  if(Object.is(distance, NaN)) return distance
  if(distance >= 0.01) {
    return distance.toFixed(2) + "公里"
  } else {
    return parseInt(distance * (10 ** 6)) + "米"
  }
}

class HotelIntroduction extends PureComponent {
  mapTabs = (pois) => {
    return pois.map(poi => ({ title: poi.name }))
  }

  mapPages = (pois) => {
    return pois.map((poi, i) => ({ 
      id: poi.name + i,
      paragraphs:  poi.subPois.map((subPoi, j) => ({
        id: subPoi.subName + j,
        title: subPoi.subName,
        describe: calcDistance(subPoi.distance)
      }))
    }))
  }

  render() {
    const { detail } = this.props
    return (
      <div style={{marginTop: ".2rem"}}>
        <InfoCard title="酒店详情" large>
          <Item title="电话" titleFixed>{detail.hotelTel}</Item>
          <Item title="开张时间" titleFixed>{detail.debutYear}年</Item>
          <Item title="房间数" titleFixed largeGap>{detail.roomNum}</Item>
          <Item title="交通地点" titleFixed colored vertical largeGap>
            <TabCard 
              tabs={this.mapTabs(detail.pois)}
              pages={this.mapPages(detail.pois)} />
          </Item>
          <Item title="酒店政策" colored vertical>{
            detail.policy.map(v => (
              <Item key={v.policyName}>
                {v.policyName}：{v.policyDesription}
              </Item>
            ))
          }</Item>
        </InfoCard>
      </div>
    )
  }
}
export default HotelIntroduction