import React, { PureComponent } from 'react'
import { Tag, Range } from "antd-mobile";

class StarAndPrice extends PureComponent {
  constructor(props) {
    super(props)

    this.minPrice = 0
    this.maxPrice = 1000

    this.state = {
      minPrice: this.props.minPrice ? this.props.minPrice : this.minPrice,
      maxPrice: this.props.maxPrice ? this.props.maxPrice : this.maxPrice,
      star: this.props.star.slice(),
    }
  }

  handleStarChange(i, selected) {
    const newStar = this.state.star.slice()
    newStar[i].selected = selected
    this.setState({
      star: newStar
    })
  }

  displayRange() {
    const { minPrice, maxPrice } = this.state
    if(minPrice === this.minPrice && maxPrice !== this.maxPrice) {
      return `￥${maxPrice} 以下`
    }
    else if(minPrice !== this.minPrice && maxPrice === this.maxPrice) {
      return `￥${minPrice} 以上`
    }
    else if(minPrice !== this.minPrice && maxPrice !== this.maxPrice) {
      return `￥${minPrice}-${maxPrice}`
    }
    else {
      return ""
    }
  }

  handleRangeChange(range) {
    this.setState({
      minPrice: range[0],
      maxPrice: range[1]
    })
  }

  clear() {
    const newStar = this.state.star.slice()
    newStar.forEach(v => v.selected = false)
    this.setState({
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      star: newStar
    })
  }

  submit() {
    const star = this.state.star.slice()
    let { minPrice, maxPrice } = this.state
    // 如果 maxPrice 为滑动条 所能展示的最大值(事实上这并不是真的 最大值), 将 最大值 置为 空
    if(maxPrice === this.maxPrice) {
      maxPrice = ''
    }
    this.props.setStarAndPrice(star, minPrice, maxPrice)
    // 关闭 drawer 
    this.props.onOpenChange()
  }

  render() {
    return (
      <div className="sidebar star-and-price">
        <div className="data-entry-block">
          <p>星级 (可多选)</p>
          <div className="flex-tag">{
            this.state.star.map((v, i) => (
              <Tag
                key={v.type}
                className="tag" 
                selected={v.selected}
                onChange={(selected) => this.handleStarChange(i, selected)}>
                {v.display}
              </Tag>
            ))
          }</div>
        </div>

        <div className="data-entry-block">
          <p>价格
            <span className="price">{this.displayRange()}</span>
          </p>
          <div className="range-selector">
            <Range
              onChange={(range) => this.handleRangeChange(range)}
              step={50}
              pushable={50}
              min={this.minPrice}
              max={this.maxPrice}
              marks={{
                [this.minPrice]: '￥' + this.minPrice,
                [this.maxPrice]: '￥' + this.maxPrice + '以上',
              }}
              value={[this.state.minPrice, this.state.maxPrice]}
            />
          </div>
        </div>
        
        <div className="clear-and-submit">
          <div className="clear" onClick={() => this.clear()}>清空</div>
          <div className="submit" onClick={() => this.submit()}>确定</div>
        </div>
      </div>
    )
  }
}
export default StarAndPrice