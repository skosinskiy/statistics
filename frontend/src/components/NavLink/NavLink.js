import { NavLink } from 'react-router-dom'
import React from 'react'
// style
import './NavLink.scss'
// material UI
import makeStyles from '@material-ui/core/styles/makeStyles'
// redux

const useStyles = makeStyles({
  link: {
    color: 'inherit',
    textDecoration: 'none'
  }
})

export const CustomNavLink = props => {
  const { to, children } = props
  const classes = useStyles()

  return (
    <NavLink to={to} className={classes.link} color="secondary">
      {children}
    </NavLink>
  )
}