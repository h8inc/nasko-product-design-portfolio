import React from "react"
import "./card.css"

const Card = ({ title, subtitle }) => {
  return (
    <div className="card">
      <div id="triangle"></div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default Card
