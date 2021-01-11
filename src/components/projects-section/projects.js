import React from "react"
import { Link } from "gatsby"

import "./projects.css"
import roger from "../../images/roger.logo.jpeg"
import piktochart from "../../images/piktochart-logo.png"
import swivle from "../../images/swivle-logo.svg"

const Projects = () => {
  return (
    <div className="wrapper black">
      <h2>Work</h2>
      <div className="card-list">
        <Link to="/roger/">
          <article className="projects-card">
            <header className="card-header">
              <div className="card-author">
                <a className="author-avatar" href="#">
                  <img src={roger} />
                </a>

                <div className="author-name hide-on-mobile">
                  <div className="author-name-prefix">Client</div>
                  <h3 className="name">Roger</h3>
                </div>
              </div>
            </header>

            <div class="tags">
              <a href="">research</a>
              <a href="">UI/UX Design</a>
              <br />
              <a href="">Product management</a>
              <br className="br-on-mobile" />
              <a href="">WEB-DEV</a>
            </div>
          </article>
        </Link>

        <Link to="/swivle/">
          <article className="projects-card">
            <header className="card-header">
              <div className="card-author">
                <a className="author-avatar" href="#">
                  <img src={swivle} />
                </a>

                <div className="author-name">
                  <div className="author-name-prefix">Client</div>
                  <h3 className="name">Swivle</h3>
                </div>
              </div>
            </header>

            <div class="tags">
              <a href="">research</a>
              <a href="">UI/UX Design</a>
              <br />
              <a href="">Brand identity</a>
              <br className="br-on-mobile" />
              <a href="">WEB-DEV</a>
            </div>
          </article>
        </Link>
        <Link to="/piktochart/">
          <article className="projects-card">
            <header className="card-header">
              <div className="card-author">
                <a className="author-avatar" href="#">
                  <img src={piktochart} />
                </a>

                <div className="author-name">
                  <div className="author-name-prefix">Client</div>
                  <h3 className="name">Piktochart</h3>
                </div>
              </div>
            </header>

            <div class="tags">
              <a href="">research</a>
              <a href="">UX Design</a> <br />
              <a href="">Project management</a>
            </div>
          </article>
        </Link>
      </div>
    </div>
  )
}

export default Projects
