import React from 'react'
// style
import './RoundReview.scss'
// services
import { halfsScore, eventCutter, eventClassHelper } from '../../../../service/roundReviewHelper'

export const RoundReview = (props) => {
  const scoreArr = halfsScore(props.information, props.homeTeam)
  const eventUiObject = eventCutter(props.information, props.homeTeam)

  return (
    <React.Fragment>
      <div className="container-wr">
        <div className="first-half">
          <div className="first-half_header">
            <span>First half</span>
            <span>{ scoreArr[0] }</span>
          </div>
          <div className="first-half_body">
            { eventUiObject[1].map((item) => {
              return <span key={ 'id_' + item.team.id + item.minute}
                className={eventClassHelper(item.team.title, props.homeTeam)}>
                {item.minute + `' ` + item.type}
              </span>
            })}
          </div>
        </div>
        <div className="second-half">
          <div className="second-half_header">
            <span>Second half</span>
            <span>{ scoreArr[1] }</span>
          </div>
          <div className="second-half_body">
            { eventUiObject[2].map((item) => {
              return <span key={ 'id_' + item.team.id + item.minute}
                className={eventClassHelper(item.team.title, props.homeTeam)}>
                {item.minute + `' ` + item.type}
              </span>
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}