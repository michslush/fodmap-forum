import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {getRestaurants} from '../store/restaurant'
import LandingPage from './LandingPage'

class UserHome extends React.Component {
  componentDidMount() {
    this.props.getRestaurants()
  }

  render() {
    const {email} = this.props

    return (
      <div>
        <h3>Welcome, {email}</h3>
        <LandingPage />
      </div>
    )
  }
}

const mapState = state => {
  return {
    restaurants: state.restaurants,
    email: state.user.email
  }
}

const mapDispatch = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurants())
  }
}

export default connect(mapState, mapDispatch)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
