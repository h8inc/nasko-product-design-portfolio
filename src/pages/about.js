import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav/Nav"

import Contact from "../components/Contact/contact"
import MainCta from "../components/CTA/cta"

import "../css/global.css"
import "../css/normalize.css"

export default function About() {
  return (
    <div>
      <Nav />

      <div className="about">
        <section className="wrapper" style={{ marginBottom: 200 }}>
          <h1>
            A bit <span className="name">about</span> myself
          </h1>
          <p style={{ marginBottom: 30 }}>
            Hi, my name is Nasko. I am a remote Product and UX designer with a
            background in product marketing and conversion rate optimization. I
            specialize in conversion-driven design and UI motion to help SaaS
            products and apps turn more free users into happy customers. Thanks
            for stoping by, stranger!
          </p>
          <MainCta />
        </section>
      </div>

      <Contact />
    </div>
  )
}
