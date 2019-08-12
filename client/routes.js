import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Login,
  Signup,
  UserHome,
  LandingPage,
  UnderConstruction
} from './components'
import {me} from './store'
import SearchResults from './components/SearchResults'
import SingleRestaurant from './components/SingleRestaurant'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/restaurants/byName/:name" component={SearchResults} />
        <Route path="/restaurants/byCuisine/:name" component={SearchResults} />
        <Route path="/restaurants/byLocation/:name" component={SearchResults} />
        <Route
          path="/restaurants/singleRestaurant/:name"
          component={SingleRestaurant}
        />
        <Route path="/underConstruction" component={UnderConstruction} />

        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
            <Route path="/restaurants/byName/:name" component={SearchResults} />
            <Route
              path="/restaurants/byCuisine/:name"
              component={SearchResults}
            />
            <Route
              path="/restaurants/byLocation/:name"
              component={SearchResults}
            />
            <Route path="/underConstruction" component={UnderConstruction} />
          </Switch>
        )}
        <Route component={Login} />
      </Switch>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Routes))

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
