import React from 'react'
import {connect} from 'react-redux'
import {getMyPlacesThunk} from '../store/myPlaces'
import {PlaceCard} from './index'

class MyPlaces extends React.Component {
  componentDidMount() {
    this.props.getMyPlacesThunk()
  }

  render() {
    const {myPlaces} = this.props

    return (
      <div>
        <h1>My Places</h1>
        <div>
          {myPlaces &&
            myPlaces.map(current => (
              <PlaceCard key={current.id} restaurant={current} />
            ))}
        </div>
      </div>
    )
  }
}

const MapState = state => ({
  myPlaces: state.places.myPlaces
})

const MapDispatch = dispatch => ({
  getMyPlacesThunk: () => dispatch(getMyPlacesThunk())
})

export default connect(MapState, MapDispatch)(MyPlaces)
