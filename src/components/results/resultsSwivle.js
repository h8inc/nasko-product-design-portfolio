import React from "react"
import "../../css/normalize.css"
import "./results.css"
import "../../css/global.css"

import Card from "../card/card"

export default function ResultsSwivle() {
  return (
    <div id="results" className=" wrapper black skew-2deg">
      <div className="results">
        <h2>The results</h2>
        <p>
          Within 12 months we found cauases of the problems that had to be
          solved and launched a variety of usability improvements in the product
          and website.
        </p>
        <div className="notes">
          <div className="card-white">
            <h2>+185% sales conversations</h2>
            <p>
              The product walkthrough added 13 sales conversation each month.
            </p>
          </div>
          <div className="card-white">
            <h2>+150% 2nd time engagment</h2>
            <p>
              Monthly the ROI calculator drove on 60 trial users for the second
              time in the product.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
