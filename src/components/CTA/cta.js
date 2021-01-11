import React from "react"
import "./cta.css"

const MainCta = ({}) => {
  return (
    <button
      className="cta"
      type="button"
      target="_blank"
      onClick={e => {
        e.preventDefault()
        window.location.href =
          "https://drive.google.com/file/d/1qaO6-NV9s7XYcnqNqDyLGfaBCySwSE1o/view?usp=sharing"
      }}
    >
      Resume
    </button>
  )
}

export default MainCta
