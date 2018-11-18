import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd-mobile'
import PropTypes from 'prop-types'

class HeaderCard extends PureComponent {
  static propTypes = {
    detail: PropTypes.object.isRequired,
    goBackPath: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  stopPropagation = (e) => {
    e.stopPropagation()
  }

  render() {
    const { detail, goBackPath, onClick } = this.props
    return (
      <div className="header-card"
        onClick={onClick}
        style={{
          backgroundImage:
            `linear-gradient(transparent 50%,rgba(0,0,0,.5)),
            url(${detail.pictures.picInfos[0].path})`
      }}>
        <div className="back" onClick={this.stopPropagation}>
          <Link to={goBackPath}>
            <Icon type="left" />
          </Link>
        </div>
        <div className="card-footer">
          <div>
            <p className="info-name">{detail.hotelName}</p>
            <span className="info-des">{detail.decorateDate.match(/\d+(?=-)/)}年装修</span>
            <span className="info-des">{detail.hotelStarName}</span>
            {/* <span className="info-des">电话: {detail.hotelTel}</span> */}
          </div>
          <span>{detail.pictures.picCount} 张</span>
        </div>
      </div>
    )
  }
}

export default HeaderCard