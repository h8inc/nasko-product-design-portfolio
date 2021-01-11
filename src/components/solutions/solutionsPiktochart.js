import React from "react"
import "../../css/normalize.css"
import "./solutions.css"
import "../../css/global.css"
import Card from "../card/card"

import wireframe1 from "../../images/roger/wireframe1.png"
import wireframe2 from "../../images/roger/wireframe2.png"
import wireframe3 from "../../images/roger/wireframe3.png"
import wireframe4 from "../../images/roger/wireframe4.png"
import wireframe5 from "../../images/roger/wireframe5.png"
import wireframe6 from "../../images/roger/wireframe6.png"

const rogerSolutions = [
  {
    title: "Drag & Drop Upload",
    subtitle:
      "Drag & Drop Upload of Documents that eliminates 6 clicks for users.",
  },
  /*{
    title: "New Sign-up ",
    subtitle:
      "Flow collecting user that enables product segmentation and personalization.",
  },
  {
    title: "Landing pages",
    subtitle:
      "Set of landing pages addressing the need to compare the product to competitors.",
  },
  {
    title: "Get Started List",
    subtitle:
      "Personalised get started list for each persona, based on attributes collected at signup.",
  },
  {
    title: "Dedicated CS",
    subtitle:
      "Access to dedicated customer success manager for prospects with the highest LTV potential.",
  },
  {
    title: "UX micro copy",
    subtitle: "Evaluation of semantics and micro copy used across the product",
  },*/
]

export default function SolutionsRoger() {
  return (
    <div id="solutions" className=" wrapper solutions ">
      <div className="solutions-container">
        <div class="solutions">
          <h2>The solutions</h2>
          <p>
            I was the UX/UI designer and project manager of a cross-functional
            squad that included a back-end engineer and front-end developer.
            Armed with a design system I guided the entire information
            architecture and usability. We were able to validate build an
            efficient and smooth user experience. Our toolbox:
          </p>
        </div>

        <div class="notes">
          <div className="card">
            <h2>Drag & Drop Upload</h2>
            <p>
              Drag & Drop Upload of Documents that eliminates 6 clicks for
              users.
            </p>
          </div>
          <div className="card">
            <h2>New Sign-up Flow</h2>
            <p>
              Flow collecting user information which enables product
              personalization.
            </p>
          </div>
          <div className="card">
            <h2>Solutions pages</h2>
            <p>
              Set of landing pages addressing the need to compare the product to
              competitors and do industry benchmark.
            </p>
          </div>
          <div className="card">
            <h2>Get Started List</h2>
            <p>
              Personalised get started list for each persona, based on
              attributes collected at signup.
            </p>
          </div>
          <div className="card">
            <h2>Dedicated CS</h2>
            <p>
              Access to dedicated customer success manager for prospects with
              the highest LTV potential.
            </p>
          </div>
          <div className="card">
            <h2>UX microcopy</h2>
            <p>
              Evaluation of semantics and micro copy used across the product.
            </p>
          </div>
        </div>
        <div className="notes">
          <img src={wireframe1} />
          <img src={wireframe2} />
          <img src={wireframe3} />
          <img src={wireframe4} />
          <img src={wireframe5} />
          <img src={wireframe6} />
        </div>
      </div>
    </div>
  )
}
