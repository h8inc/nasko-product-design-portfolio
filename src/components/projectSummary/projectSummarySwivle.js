import React from "react"
import "../../css/normalize.css"
import "./projectSummary.css"
import "../../css/global.css"
import swivleVideo from "../../images/swivle/swivleVideo.gif"

export default function ProjectSummarySwivle() {
  return (
    <div id="projectSummary" className="wrapper project-summary ">
      <div className="text">
        <h2> Project Summary</h2>

        <p>
          My primary role was user growth including research and implementation
          of UX optimizations across the user journey. Significant product
          changes were limited due to a legacy codebase. Any feature change
          could break something else, somewhere else.
        </p>

        <h3>Challenges</h3>

        <p>
          A low number of new trial customers due to low website ranking and
          discoverability
        </p>

        <p>75% website bounce rate</p>

        <p>Low customer count and MRR added each month</p>

        <h3>Responsibility</h3>
        <p>Research</p>
        <p>Project Management</p>
        <p>UX design</p>
        <p>Web development</p>
      </div>

      <a
        href="https://www.loom.com/share/d5cc0b02a221495192f9b44d28eb2ea3"
        target="_blank"
        className="project-video"
      >
        {" "}
        <img src={swivleVideo} />{" "}
      </a>
    </div>
  )
}
