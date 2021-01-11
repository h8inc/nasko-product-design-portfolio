import React from "react"
import "../../css/normalize.css"
import "./research.css"
import "../../css/global.css"
import personaRoger from "../../images/roger/personaRoger.png"

export default function ResearchRoger() {
  return (
    <div id="research" className="wrapper black skew-2deg research">
      <div className="results padding-right">
        <h2>Research Process</h2>
        <p>
          The research mix included usability heuristics backed by product
          performance data as well as user interviews conducted following the
          jobs to be done framework.
        </p>

        <h3>Qualitative research</h3>
        <p>
          A dozen interviews with power users helped us identify 3 separate use
          cases and key set up moments for each. The user feedback accumulated
          by product and support teams enabled us to identify the key friction
          points in the user journey.
        </p>

        <h3> Quantitative research</h3>
        <p>
          48% of trial users dropped off after signing up for a trial and on
          average 4% purchased. The product was difficult to get started with as
          users were not aware what actions they need to complete to experience
          the value of the product.
        </p>
      </div>
      <img src={personaRoger}></img>
    </div>
  )
}
