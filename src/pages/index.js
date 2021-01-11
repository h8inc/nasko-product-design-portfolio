import React from "react"
import { Link } from "gatsby"
import Nav from "../components/Nav/Nav"
import Hero from "../components/hero/hero"
import Projects from "../components/projects-section/projects"
import Contact from "../components/Contact/contact"

import "../css/global.css"
import "../css/normalize.css"

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  )
}
