import React from "react"
import { Link } from "gatsby"
import "./gallery.css"

import signup1 from "../../images/roger/signup1.png"
import signup2 from "../../images/roger/signup2.png"
import signup3 from "../../images/roger/signup3.png"
import checklist1 from "../../images/roger/checklist1.png"
import checklist2 from "../../images/roger/checklist2.png"
import checklist3 from "../../images/roger/checklist3.png"

const GalleryRoger = () => {
  return (
    <div className="gallery black wrapper">
      <h2>Final Designs</h2>

      <section className="gallery-list">
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={signup1} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={signup2} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={signup3} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={checklist1} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={checklist2} alt="" />
          </div>
        </article>
        <article className="gallery-card">
          <div className="gallery-card-content">
            <img src={checklist3} alt="" />
          </div>
        </article>
      </section>
    </div>
  )
}

export default GalleryRoger
