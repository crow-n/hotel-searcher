import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class InfoItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    colored: PropTypes.bool,
    titleFixed: PropTypes.bool,
    vertical: PropTypes.bool,
  }

  render() {
    const {
      title,
      largeGap = false,
      colored = false,
      titleFixed = false,
      vertical = false,
      children
    } = this.props

    return (
      <div className={"info-item" +
        (largeGap ? " info-item-large-gap" : "") +
        (vertical ? " info-item-vertical" : "")
      }>{
          title &&
          <span className={"info-item-title" +
            (colored ? " info-item-title-colored" : "") +
            (titleFixed ? " info-item-title-fix" : "")
          }>
            {title}
          </span>
        }
        <div>{children}</div>
      </div>
    )
  }
}

class InfoCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    large: PropTypes.bool,
  }

  render() {
    const { title, large = false, children } = this.props
    return (
      <div className="info-card">
        {
          title &&
          <div className={"info-card-title" +
            (large ? " info-card-title-large" : "")
          }>
            {title}
          </div>
        }
        {children}
      </div>
    )
  }
}

InfoCard.Item = InfoItem
export default InfoCard