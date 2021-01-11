import React from "react"
import Nav from "../components/Nav/Nav"
import HeroSwivle from "../components/hero/heroSwivle"
import GallerySwivle from "../components/gallery/gallerySwivle"
import ProjectSummarySwivle from "../components/projectSummary/projectSummarySwivle"
import ResearchSwivle from "../components/research/researchSwivle"
import SolutionsSwivle from "../components/solutions/solutionsSwivle"

import Contact from "../components/Contact/contact"

const swivle = () => {
  return (
    <div>
      <Nav />
      <HeroSwivle />
      <GallerySwivle />
      <ProjectSummarySwivle />
      <ResearchSwivle />
      <SolutionsSwivle />
      <Contact />
    </div>
  )
}

export default swivle
