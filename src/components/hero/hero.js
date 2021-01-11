import React from "react"
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero" className="wrapper">
      <h1>
        Hi, my name is
        <span className="name">
          {" "}
          Nasko Terziev Jr. <br />
          <br className="br-on-mobile" />{" "}
        </span>
        I'm a growth and product designer.
      </h1>
    </div>
  )
}

export default Hero
