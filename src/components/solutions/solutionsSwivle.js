import React from "react"
import "../../css/normalize.css"
import "./solutions.css"
import "../../css/global.css"
import Card from "../card/card"

import swivleResults from "../../images/swivle/swivle_results.png"

/*const addScript = url => {
  const script = document.createElement("script")
  script.src = url
  script.async = true
  document.body.appendChild(script)
}*/

export default function SolutionsSwivle() {
  return (
    <div id="solutions" className=" wrapper solutions ">
      <div className="solutions-container">
        <div class="solutions">
          <h2>The solutions</h2>
          <p>
            I was the UX/UI designer, product-marketer and web-designer managing
            drop-offs across new trial acquisition and the user journey after
            they landed on the website.
          </p>
        </div>
        <div class="notes">
          <div className="card">
            <h2>On-boarding guide</h2>
            <p>
              In-app tours enabling users to get started and schedule
              on-boarding session with a sales
            </p>
          </div>
          <a href="https://swivle.com/" target="_blank">
            <div className="card">
              <h2>Brand identity</h2>
              <p>
                Mobile responsive website that improved SEO ranking with 440% ➜
              </p>
            </div>
          </a>
          <a href="https://www.swivle.com/dam-for-brands" target="_blank">
            <div className="card">
              <h2>Sales enablement tool</h2>
              <p>
                A web-based calculator allowing trial users to quantify ROI from
                the product ➜
              </p>
            </div>
          </a>
        </div>
        <img src={swivleResults}></img>
      </div>
    </div>
  )
}

/*<div class="solutions">
          <p>
            {" "}
            The following is a sales enablement tool, allowing trial users who
            are not ready to speak with sales to quantify the value they can get
            from the product and enables sales reps to discuss returns prospects
            may get during sales calls.
          </p>
        </div>
        <div id="roi-calculator">
          {addScript("https://woodwing.github.io/swivle-website/bundle.js")}
        </div>*/
