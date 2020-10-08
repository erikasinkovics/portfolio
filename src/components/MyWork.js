import React from "react"
// import plantsitteriui from "../images/plantsitterredesign1.png"
import BackgroundPortfolio from "../images/portfolio_background.png"
import PortfolioSlider from "./PortfolioSlider"

const MyWork = () => (
  <div className="my-work">
    <div className="portfolio-container">
      <div className="portfolio-item">
        <div className="portfolio-title">
          <h2><span>{"<"}</span>Portfolio<span>{"/>"}</span></h2>
          <div className="arrows">
          </div>
        </div>
        <div className="portfolio-slider">
          <PortfolioSlider/>
        </div>
      </div>
    </div>
  </div>
)

export default MyWork
