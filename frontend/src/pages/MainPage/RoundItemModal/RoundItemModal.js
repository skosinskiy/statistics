import React, { useEffect } from 'react'
// services
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
// import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItem from '@material-ui/core/ListItem'
// import List from '@material-ui/core/List'
// import Divider from '@material-ui/core/Divider'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CloseIcon from '@material-ui/icons/Close'
// import Slide from '@material-ui/core/Slide'
// style
import './RoundItemModal.scss'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearMatchDetailsData } from '../../../store/matchDetail/operations'
// services
import { parseDate } from '../../../service/dateParsers'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}))

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export const RoundItemModal = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isMatchesLoading, match } = useSelector(state => state.matchDetail)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState(0);
  const dateParsed = match ? parseDate(match.date) : null

  useEffect(() => {
    if (match && isMatchesLoading) {
      setOpen(true)
    }
  }, [match, isMatchesLoading])

  const handleClose = () => {
    dispatch(clearMatchDetailsData())
    setOpen(false)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      { match ? <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        className='round-popup'>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title + ' header-name'}>
              { 'league NAME?'}
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
            <Typography
              variant="h6"
              className={classes.title + ' header-date'}>
              { dateParsed }
            </Typography>
          </Toolbar>
        </AppBar>
        <section className="primary">
          <span className="primary-home">{ match.homeTeam.title }</span>
          <div className="primary-result">
            <span className="primary-result_score">{ match.homeScore + ' - ' + match.awayScore }</span>
            <span className="primary-result_status">{ match.state }</span>
          </div>
          <span className="primary-away">{ match.awayTeam.title }</span>
        </section>
        <section>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </section>
      </Dialog> : null }
    </div>
  )
}