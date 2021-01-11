import React from "react"
import "../../css/normalize.css"
import "./projectSummary.css"
import "../../css/global.css"
import rogerVideo from "../../images/roger/roger-video.gif"

export default function ProjectSummaryRoger() {
  return (
    <div id="projectSummary" className="wrapper project-summary ">
      <div className="padding-right">
        <h2> Project Summary</h2>

        <p>
          Conducted user research and translated findings into clear UX and UI
          flows for a fintech company from San Francisco that augments
          accounting. The project was initiated and executed in 4 months.
        </p>

        <h3>Challenges</h3>

        <p>Low visitor to free trial conversion</p>

        <p>Low trial to paid conversion</p>

        <h3>Responsibility</h3>
        <p>Research</p>
        <p>Project Management</p>
        <p>UX design</p>
      </div>

      <a
        href="https://www.loom.com/share/8c62d414ab3e4171aff8ed5996f6e466"
        target="_blank"
        className="project-video"
      >
        {" "}
        <img src={rogerVideo} />
      </a>
    </div>
  )
}
