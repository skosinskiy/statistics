import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grant } from '../../constants/permissions'
import { hasGrant } from '../../utils/hasGrant'
import { Sports } from '../../pages/MainPage/Sports/Sports'
import { NotFound } from '../Page404/Page404'
import { Home } from '../../pages/MainPage/Home/Home'

class MainRouter extends Component {
  render () {
    const { user } = this.props
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthorizedRoute authorized={hasGrant(user, Grant.VIEW)} path="/sport/:id" component={Sports} />

        <Route path="*" component={NotFound} />
      </Switch>
    )
  }
}

MainRouter.propTypes = {
  user: PropTypes.object.isRequired
}

export const AuthorizedRoute = ({ component: Component, authorized, ...rest }) => (
  <Route {...rest} render={(props) => authorized
    ? <Route component={Component} {...props} />
    : <Redirect to='/login' />} />
)

AuthorizedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authorized: PropTypes.bool.isRequired
}

const mapStateToProps = ({ users }) => {
  return {
    user: users.currentUser
  }
}

export default withRouter(connect(mapStateToProps)(MainRouter))