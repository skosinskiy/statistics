import React from 'react'
import { withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
// redux
import { useSelector } from 'react-redux'
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
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const classes = useStyles()

  return (
    tournaments ? tournaments.map(tournament => {
      return <Accordion key={'id_' + tournament.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{tournament.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            no info
        </AccordionDetails>
      </Accordion>
    }) : null
  )
}

export default withRouter(TournamentsList)