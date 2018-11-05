import React, { PureComponent } from 'react'
import { Carousel } from "antd-mobile";

class PicCarousel extends PureComponent {
  state = {
    nowNum: 1,
    name: ''
  }

  componentDidMount() {
    this.setState({ name: this.props.pics[0].picName })
  }

  render() {
    const pics = this.props.pics
    return (
      <div className="pic-carousel" onClick={this.props.onOpenChange}>
        <div className="pic-num">{this.state.nowNum}/{pics.length}</div>
        <Carousel
          infinite={true}
          dots={false}
          afterChange={i => this.setState({ 
            nowNum: i + 1,
            name: pics[i].picName
         })}
        >{
          pics.map((pic) =>
            <div className="pic-carousel-item" key={pic.picId}>
              <img src={pic.path} alt="" />
            </div>
          )
        }</Carousel>
        <div className="pic-name">{this.state.name}</div>
      </div>
    )
  }
}
export default PicCarousel