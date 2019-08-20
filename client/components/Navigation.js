import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {Navbar, Nav, Image} from 'react-bootstrap'

const Navigation = ({handleClick, isLoggedIn}) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/home">
      <h1 id="website-title">FODMAPforum</h1>
    </Navbar.Brand>
    <Nav className="mr-auto">
      {isLoggedIn ? (
        <div className="nav-links-custom">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/" onClick={handleClick}>
            Logout
          </Nav.Link>
          <Nav.Link href="/myPlaces">
            <Image
              id="myPlacesIcon"
              src="/places.png"
              style={{width: '70px'}}
            />
          </Nav.Link>
        </div>
      ) : (
        <div className="nav-links-custom">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign Up</Nav.Link>
        </div>
      )}
    </Nav>
    <hr />
  </Navbar>
)

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navigation)

Navbar.propTypes = {
  handleClick: PropTypes.func,
  isLoggedIn: PropTypes.bool
}
