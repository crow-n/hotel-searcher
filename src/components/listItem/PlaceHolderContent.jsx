import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class PlaceHolderContent extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
  }

  render() {
    const { value, placeholder } = this.props
    return (
      <p className={ "placeholder-cnt" +
        (value ? " placeholder-cnt-value" : "")
      }>{
        value ? value : placeholder
      }</p>
    )
  }
}

export default PlaceHolderContent