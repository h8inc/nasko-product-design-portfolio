import React from "react"
import "../../css/normalize.css"
import "./research.css"
import "../../css/global.css"

import SwivlePersona from "../../images/swivle/swivlePersona.png"
import SwivleResearch1 from "../../images/swivle/SwivleResearch1.png"
import SwivleResearch2 from "../../images/swivle/SwivleResearch2.png"
import SwivleResearch3 from "../../images/swivle/SwivleResearch3.png"
import SwivleResearch4 from "../../images/swivle/SwivleResearch4.png"
import SwivleWeb2 from "../../images/swivle/SwivleWeb2.png"
import SwivleWeb3 from "../../images/swivle/SwivleWeb3.png"
import SwivleWeb4 from "../../images/swivle/SwivleWeb4.png"
import calculator1 from "../../images/swivle/calculator1.png"
import calculator2 from "../../images/swivle/calculator2.png"

export default function ResearchSwivle() {
  return (
    <div id="research" className="wrapper black skew-2deg research wrap">
      <div className="results text">
        <h2>Research Process</h2>
        <p>
          The research mix included usability heuristics of existing product
          experience as well as dozends of user interviews and case studies
          conducted following the jobs to be done framework.
        </p>

        <h3>Qualitative research</h3>
        <p>
          After a series of customer discovery interviews, we've validated three
          user personas across various industries. The majority of Swilve's end
          customers are retail, but most direct business transactions are made
          mostly with creative agencies and studios serving the retail
          businesses.
        </p>
        <h3> Quantitative research</h3>
        <p>
          Due to the product's enterprise nature, 95% of the deals happened only
          after contact with sales. 51% of trial users dropped off after signing
          up for a trial. The product was difficult to get started with without
          onboarding customers one by one due to the complexity of their use
          cases.
        </p>
      </div>

      <section className="gallery-list">
        <article className="gallery-card ">
          <div className="gallery-card-content">
            <img src={SwivleResearch4} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleResearch3} alt="" />
          </div>
        </article>

        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleResearch1} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleResearch2} alt="" />
          </div>
        </article>

        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivlePersona} alt="" />
          </div>
        </article>
      </section>

      <div class="notes skew2deg">
        <a
          href="https://uploads-ssl.webflow.com/5ddba8a2977b834bbb3f16c0/5e452b05277360a72dce0883_Swivle_E-book_agencies_interactive.pdf"
          target="_blank"
        >
          <div className="card-white">
            <h2>In-dept research of agency use cases</h2>
            <p>
              The research examines IT processes and revenue models unlocked
              with swivle ➜
            </p>
          </div>
        </a>
        <a href="https://swivle.com/case-studies" target="_blank">
          <div className="card-white ">
            <h2>Retail use cases</h2>
            <p>Learn more about use cases of different companies ➜</p>
          </div>
        </a>
      </div>
    </div>
  )
}
