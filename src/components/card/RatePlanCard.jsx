import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const Word = ({className, green = false, children}) => 
  <span className={className + (green ? " green" : "")}>{children}</span>
const Tip = (props) => <Word className="tip" {...props} />
const Stress = (props) => <Word className="stress" {...props} />

class RatePlanCard extends PureComponent {
  static propTypes = {
    plan: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const { plan, onClick } = this.props

    return (
      <div className="rate-plan-card" onClick={onClick}>
        <div className="rate-plan-info">
          <p>
            <Stress green={plan.breakfast !== "无早"}>
              {plan.breakfast}
            </Stress>
            <Stress>{plan.bedType}</Stress>
          </p>
          <p>
            <Tip>{plan.name}</Tip>
          </p>
          <p>{
              plan.cancel &&
              <Tip green={plan.cancel.name !== "不可取消"}>
                {plan.cancel.name}
              </Tip>
            }
            <Tip green={true}>{plan.available}</Tip>
          </p>
        </div>
        <div className="price-pay">
          <div className="rate-plan-price red-price">
            均￥
            <span className="red-price-strong">
              {plan.averagePrice}
            </span>
          </div>
          <div className="pay-type">{plan.payType}</div>
        </div>
      </div>

    )
  }
}
export default RatePlanCard