import React from "react";

const PortfolioPiece = (props) => (
     <div className="portfolio-piece-card">
          <div className="img-placeholder" 
          style={props.background} >
          </div>
          <div className="portfolio-piece-text">
               <div>
                    <h5>{props.projectTitle}</h5>
                    <small>{props.about}</small>
               </div>
               <div className="portfolio-piece-links">
                    <a href={props.projectUrl} >website →</a>
                    <a href={props.sourceUrl} >github →</a>
               </div>
          </div>
     </div>
)

export default PortfolioPiece;