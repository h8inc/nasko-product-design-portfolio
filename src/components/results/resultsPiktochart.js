import React from "react"
import "../../css/normalize.css"
import "./results.css"
import "../../css/global.css"

import Card from "../card/card"

export default function ResultsRoger() {
  return (
    <div id="results" className=" wrapper black skew-2deg">
      <div className="results">
        <h2>The results</h2>
        <p>
          Within 4 months we found cauases of the problems that had to be solved
          and launched a variety of usability improvements in the product and
          website.
        </p>
        <div className="notes">
          <div className="card-white">
            <h2>+32% free trials</h2>
            <p>
              The website UI and UX changes contributed to 32% more trial
              customers
            </p>
          </div>
          <div className="card-white">
            <h2>+100% paid customers</h2>
            <p>
              The changes in the product experience contributed to doubling the
              number of people purchasing.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
