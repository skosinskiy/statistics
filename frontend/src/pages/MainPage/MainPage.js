import React, { useEffect } from 'react'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'
import { SidebarMenu } from './SidebarMenu/SidebarMenu'
import MainRouter from '../../components/MainRouters/MainRouter'
import makeStyles from '@material-ui/core/styles/makeStyles'
//  component
import { TournamentsList } from './TournamentsList/TournamentsList'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getSportsCategory } from '../../store/sportsCategory/operations'
// style
import './MainPage.scss'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    padding: '0px 0px 0px 250px',
    justifyContent: 'space-between'
  },
  toolbar: {
    display: 'flex'
  },
  toolbarText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  content: {
    flexGrow: 1,
    padding: '0px',
    height: '100vh',
    marginTop: '64px',
    overflow: 'auto'
  }
}))

const MainPage = props => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const activeSportId = useSelector(state => state.sportsCategory.choiceCategory)
  const tournamentList = activeSportId ? <TournamentsList></TournamentsList> : null
  useEffect(() => dispatch(getSportsCategory()), [dispatch])
  const logoutUser = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <div className={classes.root}>
      <AppBar className={classNames(classes.appBar)}>
        <div className="sidebar-wrapper">
          <SidebarMenu/>
        </div>
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={logoutUser} color="inherit" alt="Log out">
            <ExitToAppRoundedIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" classes={{ paper: classNames(classes.drawerPaper) }}>
        <div className={classes.toolbarText}>
           Hello!
        </div>
        <Divider/>
        {
          tournamentList
        }
        <Divider/>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        <MainRouter/>
      </main>
    </div>
  )
}

export default withRouter(MainPage)