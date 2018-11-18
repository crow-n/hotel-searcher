import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import StarAndPrice from "../sidebar/StarAndPrice";

const initialMaxPrice = 1000

class StarPriceWidthState extends PureComponent {
  static propTypes = {
    minPrice: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    ).isRequired,
    maxPrice: PropTypes.oneOfType(
      [PropTypes.string, PropTypes.number]
    ).isRequired,
    starMap: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired,
    isStarPriceDrawerOpen: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  state = {
    minPrice: this.props.minPrice || 0,
    maxPrice: this.props.maxPrice || initialMaxPrice,
    starMap: this.props.starMap,
  }

  // 当用户 没点确定 就关掉了组件, 在下一次打开时 重新从 props 取数据
  componentWillReceiveProps(newProps) {
    if(newProps.isStarPriceDrawerOpen) {
      this.setState({
        minPrice: this.props.minPrice || 0,
        maxPrice: this.props.maxPrice || initialMaxPrice,
        starMap: this.props.starMap,
      })
    }
  }

  handleStarChange = (i, selected) => {
    const newStarMap = this.state.starMap.slice()
    newStarMap[i].selected = selected
    this.setState({
      starMap: newStarMap
    })
  }

  displayRange = () => {
    const { minPrice, maxPrice } = this.state
    if (minPrice === 0 && maxPrice !== initialMaxPrice) {
      return `￥${maxPrice} 以下`
    }
    else if (minPrice !== 0 && maxPrice === initialMaxPrice) {
      return `￥${minPrice} 以上`
    }
    else if (minPrice !== 0 && maxPrice !== initialMaxPrice) {
      return `￥${minPrice}-${maxPrice}`
    }
    else {
      return ""
    }
  }

  handleRangeChange = (range) => {
    this.setState({
      minPrice: range[0],
      maxPrice: range[1]
    })
  }

  clear = () => {
    this.setState(prevState => ({
      minPrice: 0,
      maxPrice: initialMaxPrice,
      starMap: prevState.starMap.map(el => ({
        ...el,
        selected: false
      }))
    }))
  }

  submit = () => {
    let { minPrice, maxPrice, starMap } = this.state
    // 如果 maxPrice 为 滑动条所能展示的最大值(事实上这并不是真的 最大值), 将 maxPrice 置为空
    if (maxPrice === initialMaxPrice) {
      maxPrice = ''
    }
    const star = starMap.map(el => ({...el}))
    this.props.onSubmit(star, minPrice, maxPrice)
  }

  render() {
    return (
      <StarAndPrice 
        {...this.state}
        initialMaxPrice={initialMaxPrice}
        handleStarChange={this.handleStarChange}
        displayRange={this.displayRange}
        handleRangeChange={this.handleRangeChange}
        clear={this.clear}
        submit={this.submit} />
    )
  }
}

export default StarPriceWidthState