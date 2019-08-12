import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import LandingPage from './LandingPage'

class UserHome extends React.Component {
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
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

UserHome.propTypes = {
  email: PropTypes.string
}
