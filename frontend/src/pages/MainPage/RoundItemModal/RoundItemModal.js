import React, { useEffect } from 'react'
// services
import { makeStyles } from '@material-ui/core/styles'
// material
import Dialog from '@material-ui/core/Dialog'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
// style
import './RoundItemModal.scss'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { clearMatchDetailsData } from '../../../store/matchDetail/operations'
// services
import { parseDate } from '../../../service/dateParsers'
// child
import { RoundReview } from './RoundReview/RoundReview'
import { RoundStatistic } from './RoundStatistic/RoundStatistic'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}))

export const RoundItemModal = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { isMatchesLoading, match } = useSelector(state => state.matchDetail)

  const [open, setOpen] = React.useState(false)
  const [tabNumber, setValue] = React.useState(0)
  const [tabInfo, setTabsInfo] = React.useState(null)
  const dateParsed = match ? parseDate(match.date) : null

  useEffect(() => {
    if (match && isMatchesLoading) {
      setOpen(true)
      setTabsInfo(<RoundReview information={ match.eventList }></RoundReview>)
    }
  }, [match, isMatchesLoading, tabNumber])

  const handleClose = () => {
    dispatch(clearMatchDetailsData())
    setOpen(false)
    setValue(0)
  }

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
    if (newValue === 1) {
      setTabsInfo(<RoundStatistic statistic={ match.statisticList }></RoundStatistic>)
    } else {
      setTabsInfo(<RoundReview information={ match.eventList }></RoundReview>)
    }
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
            <Typography
              variant="subtitle1"
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
        <section className="main">
          <AppBar position="static">
            <Tabs value={ tabNumber } onChange={ handleChangeTab } aria-label="simple tabs example">
              <Tab label="Review match" />
              <Tab label="Statistic" />
            </Tabs>
          </AppBar>
          <div className="main-info">
            { tabInfo }
          </div>
        </section>
      </Dialog> : null }
    </div>
  )
}