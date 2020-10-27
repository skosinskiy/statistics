import React from 'react'
// style
import './RoundReview.scss'
// services
import { halfsScore } from '../../../../service/roundReviewHelper'

export const RoundReview = (props) => {
  console.log(props)
  const scoreArr = halfsScore(props.information)
  console.log(scoreArr)
  return (
    <React.Fragment>
      <div className="container-wr">
        <div className="first-half">
          <div className="first-half_header">
            <span>First half</span>
            <span>{ scoreArr[0] }</span>
          </div>
          <div className="first-half_body">
            1321321321
          </div>
        </div>
        <div className="second-half">
          <div className="second-half_header">
            <span>Second half</span>
            <span>{ scoreArr[1] }</span>
          </div>
          <div className="second-half_body">
            53453434553
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}