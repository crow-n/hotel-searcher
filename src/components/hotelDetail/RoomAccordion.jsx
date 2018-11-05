import React, { PureComponent } from 'react'
import { Accordion, List } from 'antd-mobile'

import CustomDrawer from '../drawer/CustomDrawer'
import RoomDetail from '../sideBar/RoomDetail'

const header = (room) => (
  <div className="room-accordion-header">
    <div className="room-img">
      <img src={room.pictures.pics[0].path} alt="" />
      <div className="pic-num">{room.pictures.picCount} 张</div>
    </div>
    <div className="room-info">
      <div className="room-name">{room.roomNameCn}</div>
      <div className="des-line">
        <div className="des">{room.area.replace(/平方米/, 'm')}<sup>2</sup></div>
        <div className="des">{room.floor}</div>
        <div className="des">{room.isExtraBedNum}</div>
      </div>
      <div className="des-line">
        <div className="des">{room.bedDescription}</div>
        <div className="des">{room.isExtraBed}</div>
      </div>
      <div className="des-line">
        <div className="des">{room.noSmoking}</div>
      </div>
    </div>
    <div className="room-price">
      ￥<span className="start-price">{room.roomLowestPrice}</span>起
    </div>
  </div>
)

const item = (plan, onOpenChange) => (
  <div className="room-plan" onClick={onOpenChange}>
    <div className="room-plan-des">
      <div className="room-plan-brief">
        <span className={plan.breakfast !== "无早" ? "green" : ""}>
          {plan.breakfast}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {plan.bedType}
      </div>
      <div className="des-line">
        <div className="des" style={{ width: '100%' }}>{plan.name}</div>
      </div>
      <div className="des-line">
        {
          plan.cancel &&
          <div className={"des " +
            (plan.cancel.name !== "不可取消" && "green")}>
            {plan.cancel.name}</div>
        }
        <div className="des green">{plan.available}</div>
      </div>
    </div>
    <div className="room-pay">
      <span className="room-price">
        均￥<span className="start-price">{plan.averagePrice}</span>
      </span>
      <span className="pay-type">{plan.payType}</span>
    </div>
  </div>
)

class RoomAccordion extends PureComponent {
  render() {
    return (
      <Accordion className="room-accordion">{
        this.props.rooms.map(room => (
          <Accordion.Panel key={room.roomId} header={header(room)}>
            <List>{
              room.ratePlanInfo.map(plan => (
                <List.Item key={plan.id}>
                  <CustomDrawer
                    position="bottom"
                    sidebar={<RoomDetail room={room} plan={plan} />}
                    trigger={(handleOpenChange) =>
                      item(plan, handleOpenChange)
                    }
                  />
                </List.Item>))
            }</List>
          </Accordion.Panel>
        ))
      }</Accordion>
    )
  }
}
export default RoomAccordion