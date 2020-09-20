import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getTournamentsOfSport } from '../../../store/tournamentsSport/operations'
// material
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// styles
import './TournamentsList.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}))

export const TournamentsList = props => {
  const dispatch = useDispatch()

  const activeSportId = useSelector(state => state.categorySports.choiceCategory)
  console.log('activeSportId', activeSportId)
  useEffect((activeSportId) => dispatch(getTournamentsOfSport(activeSportId)), [dispatch])
  const tournaments = useSelector(state => state.tournamentsOfSport.tournaments)
  console.log(tournaments)
  const classes = useStyles()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography className={classes.heading}>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </AccordionDetails>
    </Accordion>
  )
}

export default withRouter(TournamentsList)