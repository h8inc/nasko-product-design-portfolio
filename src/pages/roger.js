import React from "react"
import Nav from "../components/Nav/Nav"
import HeroRoger from "../components/hero/heroRoger"
import GalleryRoger from "../components/gallery/galleryRoger.js"
import ProjectSummaryRoger from "../components/projectSummary/projectSummaryRoger"
import ResearchRoger from "../components/research/researchRoger"
import SolutionsRoger from "../components/solutions/solutionsRoger"
import ResultsRoger from "../components/results/resultsRoger"
import Contact from "../components/Contact/contact"

const roger = () => {
  return (
    <div>
      <Nav />
      <HeroRoger />
      <GalleryRoger />
      <ProjectSummaryRoger />
      <ResearchRoger />
      <SolutionsRoger />
      <ResultsRoger />
      <Contact />
    </div>
  )
}

export default roger
