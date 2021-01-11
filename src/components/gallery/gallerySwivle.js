import React from "react"
import { Link } from "gatsby"
import "./gallery.css"

import SwivleWeb1 from "../../images/swivle/SwivleWeb1.png"
import SwivleWeb2 from "../../images/swivle/SwivleWeb2.png"
import SwivleWeb3 from "../../images/swivle/SwivleWeb3.png"
import SwivleWeb4 from "../../images/swivle/SwivleWeb4.png"
import calculator1 from "../../images/swivle/calculator1.png"
import calculator2 from "../../images/swivle/calculator2.png"

const GallerySwivle = () => {
  return (
    <div className="gallery black wrapper">
      <h2>Final Designs</h2>

      <section className="gallery-list">
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleWeb1} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleWeb2} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleWeb3} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={SwivleWeb4} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={calculator1} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={calculator2} alt="" />
          </div>
        </article>
      </section>
    </div>
  )
}

export default GallerySwivle
