import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from "antd-mobile";

class PicCarousel extends PureComponent {
  static propTypes = {
    pics: PropTypes.arrayOf(
      PropTypes.object.isRequired
    ).isRequired,
    autoplay: PropTypes.bool,
    onClick: PropTypes.func,
    inner: PropTypes.bool,
  }

  state = {
    picIndex: 1,
    picName: ''
  }

  componentDidMount() {
    this.setState({ 
      picName: this.props.pics[0].picName
    })
  }

  afterChange = (i) => {
    this.setState({ 
      picIndex: i + 1,
      picName: this.props.pics[i].picName
    })
  }

  render() {
    const { picIndex, picName } = this.state
    const { 
      pics, 
      autoplay = false, 
      onClick = () => {}, 
      inner = false 
    } = this.props

    return (
      <div className={
        (inner ? "pic-carousel-inner" : "pic-carousel")
      } onClick={onClick}>
        <div className="pic-num">
          {picIndex}/{pics.length}
        </div>
        <Carousel
          autoplay={autoplay}
          infinite={true}
          dots={false}
          afterChange={this.afterChange}
        >{
          pics.map((pic) =>
            <div className="pic-carousel-item" key={pic.picId}>
              <img src={pic.path} alt="" />
            </div>
          )
        }</Carousel>
        <div className="pic-name">{picName}</div>
      </div>
    )
  }
}
export default PicCarousel