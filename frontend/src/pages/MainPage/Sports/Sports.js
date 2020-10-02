import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
// components
import { LinearIndeterminate } from '../../../components/LinearIndeterminate/LinearIndeterminate'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// child
import { RoundItem } from './RoundItem/RoundItem'
// redux
import { useSelector, useDispatch } from 'react-redux'
import { setChoiceCategoryOfSports } from '../../../store/sportsCategory/operations'
import { findAllRounds } from '../../../store/rounds/operations'
import './Sports.scss'

export const Sports = (props) => {
  const dispatch = useDispatch()
  const [redirctToHome, setRedirctToHome] = useState(false)
  const [expanded, setExpanded] = useState('panel1')

  const sports = (useSelector(state => state.sportsCategory.sportsCategory))

  const activeIdOfTournament = useSelector(state => state.tournaments.activeTournamentId)
  const tournaments = useSelector(state => state.tournaments.tournaments)
  const isTournamentsLoading = useSelector(state => state.tournaments.isTournamentsLoading)

  const roundsOfChoiceTournament = useSelector(state => state.rounds.rounds)
  const isRoundsLoading = useSelector(state => state.rounds.isRoundsLoading)

  useEffect(() => {
    if (isTournamentsLoading && !tournaments && sports) {
      const actualCategory = sports.find((category) => {
        return category.title === props.match.params.id
      })
      if (actualCategory) {
        dispatch(setChoiceCategoryOfSports(actualCategory.id))
      } else {
        setRedirctToHome(true)
      }
    }
    if (activeIdOfTournament && !isTournamentsLoading) dispatch(findAllRounds(activeIdOfTournament))
  }, [isTournamentsLoading, tournaments, sports, props.match.params.id, activeIdOfTournament, dispatch])
  const penalChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }
  if (redirctToHome) {
    return <Redirect to='/' />
  }

  return (
    <React.Fragment>
      { isTournamentsLoading || isRoundsLoading ? <LinearIndeterminate></LinearIndeterminate> : <div className="rounds">
        { roundsOfChoiceTournament ? roundsOfChoiceTournament.content.map((round) => {
          return <Accordion key={'key_' + round.id}
            square expanded={expanded === 'panel_id_' + round.id}
            onChange={penalChange('panel_id_' + round.id)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="accordion-title">{'Round' + round.number}</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-content">
              {
                round.matchList.map((item) => {
                  return <RoundItem
                    key={'key_' + item.id}
                    item={item}>
                  </RoundItem>
                })
              }
            </AccordionDetails>
          </Accordion>
        }) : null
        }
      </div> }
    </React.Fragment>
  )
}