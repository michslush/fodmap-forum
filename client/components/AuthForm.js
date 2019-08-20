import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'
import {Form, Button} from 'react-bootstrap'

const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <Form onSubmit={handleSubmit} name={name}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="username"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {displayName}
        </Button>

        {error && error.response && <div> {error.response.data} </div>}
      </Form>
      <div id="withGoogle">
        <a href="/auth/google">{displayName} with Google</a>
      </div>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      const username = evt.target.username.value
      dispatch(auth(email, password, formName, username))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
