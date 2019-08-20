import React from 'react'
import {connect} from 'react-redux'
import {getMyPlacesThunk} from '../store/myPlaces'

class MyPlaces extends React.Component {
  componentDidMount() {
    this.props.getMyPlacesThunk()
  }

  render() {
    return (
      <div>
        {this.props.places && this.props.places.map(current => current.name)}
      </div>
    )
  }
}

const MapState = state => ({
  myPlaces: state.places
})

const MapDispatch = dispatch => ({
  getMyPlacesThunk: () => dispatch(getMyPlacesThunk())
})

export default connect(MapState, MapDispatch)(MyPlaces)
