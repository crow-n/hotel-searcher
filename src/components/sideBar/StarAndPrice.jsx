import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Tag, Range } from "antd-mobile";


class StarAndPrice extends PureComponent {
  static propTypes = {
    initialMaxPrice: PropTypes.number.isRequired,
    minPrice: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    ).isRequired,
    maxPrice: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    ).isRequired,
    starMap: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired,
    handleStarChange: PropTypes.func.isRequired,
    displayRange: PropTypes.func.isRequired,
    handleRangeChange: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  }

  render() {
    const { initialMaxPrice, minPrice, maxPrice, starMap } = this.props
    return (
      <div className="star-and-price">
        <div>
          <div className="wrapper">
            <p>星级 (可多选)</p>
            <div className="flex-tags">{
              starMap.map((v, i) => (
                <Tag
                  key={v.type}
                  className="tag"
                  selected={v.selected}
                  onChange={(selected) => this.props.handleStarChange(i, selected)}>
                  {v.display}
                </Tag>
              ))
            }</div>
          </div>

          <div className="wrapper">
            <p>价格
              <span className="price-displayed">{
                this.props.displayRange(minPrice, maxPrice)
              }</span>
            </p>
            <div className="range-selector">
              <Range
                onChange={this.props.handleRangeChange}
                step={50}
                pushable={50}
                min={0}
                max={initialMaxPrice}
                marks={{
                  [0]: '￥0',
                  [initialMaxPrice]: '￥' + initialMaxPrice + '以上',
                }}
                value={[minPrice, maxPrice]}
              />
            </div>
          </div>
        </div>

        <div className="clear-and-submit">
          <div className="btn clear" onClick={this.props.clear}>清空</div>
          <div className="btn submit" onClick={this.props.submit}>确定</div>
        </div>
      </div>
    )
  }
}
export default StarAndPrice