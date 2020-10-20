import React from "react"
import ProjectSlider from "./ProjectSlider"

const Projects = () => (
  <div className="my-work container" id="projects">
    <div className="portfolio-container">
      <div className="portfolio-item">
        <div className="portfolio-title">
          <h2><span>{"<"}</span>Projects<span>{"/>"}</span></h2>
          <div className="arrows">
          </div>
        </div>
        <div className="portfolio-slider">
          <ProjectSlider/>
        </div>
      </div>
    </div>
  </div>
)

export default Projects
