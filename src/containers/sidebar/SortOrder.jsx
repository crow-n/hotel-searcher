import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Menu } from 'antd-mobile';
import { setSortCode, toggleSortOrderDrawer } from '../../actions';
import { sortCodeMap } from '../../request/hotel';

class SortOrder extends PureComponent {
  static propTypes = {
    menu: PropTypes.array.isRequired,
    valueArr: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const { menu, valueArr, onChange } = this.props
    return (
      <Menu
        data={menu}
        value={valueArr}
        level={1}
        onChange={onChange}
        height={134}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  menu: Object.keys(sortCodeMap).map(key => ({
    value: key, 
    label: sortCodeMap[key]
  })),
  valueArr: [state.filter.sortCode],
})

const mapDispatchToProps = (dispatch) => ({
  onChange: (selectArr) => {
    dispatch(setSortCode(selectArr[0]))
    dispatch(toggleSortOrderDrawer())
  }
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SortOrder)