import React from "react"
import plantsitteriui from "../images/plantsitterredesign1.png"
import BackgroundPortfolio from "../images/portfolio_background.png"
import PortfolioSlider from "./PortfolioSlider"

const MyWork = () => (
  <div className="my-work">
    {/* <img src={BackgroundPortfolio}/> */}
    {/* <div className="portfolio-title" >
      <p>My work</p>
      <h2>Portfolio</h2>
    </div> */}
    <div className="portfolio-container">
      <div className="portfolio-item">
        <div className="portfolio-title">
          {/* <img src={plantsitteriui} height="500px" alt="UI Design for PlantSitter app"/> */}
          <h2><span>{"<"}</span>Portfolio<span>{"/>"}</span></h2>
          <div className="arrows">
          {/* <p className="arrow arrow-left">◀︎</p>
          <p className="arrow arrow-right">▶</p> */}
          </div>
        </div>
        <div className="portfolio-slider">
          <PortfolioSlider/>


          {/* <div className="portfolio-description">
            <h3>PlantSitter</h3>
            <p>
              Marketplace app connecting local plant enthusiast with plant experts. Users can book plant sitters to look after their plants while they are away from home.
            </p>
            <p>
              The project is coded in Ruby and Rails and TypeScript.
            </p>
            <p>Link to project</p>
          </div> */}
          
          {/* <div className="portfolio-tags">
            <p>ruby</p>
            <p>rails</p>
            <p>html</p>
            <p>scss</p>
            <p>javascript</p>
            <p>typescript</p>
            <p>figma</p>
            <p>postgresql</p>
            <p>devise</p>
            <p>pundit</p>
          </div> */}
        </div>
      </div>
    </div>
  </div>
)

export default MyWork
