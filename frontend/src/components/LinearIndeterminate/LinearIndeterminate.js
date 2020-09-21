import React from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  colorPrimary: {
    backgroundColor: theme.palette.primary.light,
    height: '8px'
  },
  barColorPrimary: {
    backgroundColor: theme.palette.primary.dark
  }
}))

export const LinearIndeterminate = () => {
  const classes = useStyles()

  return (
    <div>
      <LinearProgress
        classes={{ colorPrimary: classes.colorPrimary, barColorPrimary: classes.barColorPrimary }}
      />
    </div>
  )
}