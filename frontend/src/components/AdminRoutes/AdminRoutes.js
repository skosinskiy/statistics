import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Grant } from '../../constants/permissions'
import { hasGrant } from '../../utils/hasGrant'
import { Football } from '../../pages/AdminPage/Football/Football'
import { Basketball } from '../../pages/AdminPage/Basketball/Basketball'
import { NotFound } from '../Page404/Page404'
import { Home } from '../../pages/AdminPage/Home/Home'

class AdminRouter extends Component {
  render () {
    const { user } = this.props
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthorizedRoute authorized={hasGrant(user, Grant.VIEW)} path="/football" component={Football} />
          <AuthorizedRoute authorized={hasGrant(user, Grant.VIEW)} path="/basketball" component={Basketball} />

          <Route path="*" component={NotFound} />
        </Switch>
      </React.Fragment>
    )
  }
}

AdminRouter.propTypes = {
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

export default withRouter(connect(mapStateToProps)(AdminRouter))