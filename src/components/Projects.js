import React from "react"
import ProjectSlider from "./ProjectSlider"

const Projects = () => (
  <div className="my-work">
    <div className="container" id="projects">
      <div className="portfolio-item">
          <div className="portfolio-title">
            <h2><span>{"<"}</span>Projects<span>{"/>"}</span></h2>
            <div className="arrows">
            </div>
          </div>
          <div className="portfolio-slider">
            <ProjectSlider style={{"width": "100%"}}/>
          </div>
        </div>
    </div>
  </div>
)

export default Projects
