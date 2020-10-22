import React from "react";

const ProjectCard = (props) => (
     <div className="portfolio-piece-card">
          <div className="portfolio-image" style={{"backgroundImage": `url(${props.thumbnail})`}}></div>
          <div className="portfolio-piece-text">
               <div>
                    <h5>{props.title}</h5>
                    <small id="portfolio-description">{props.description}</small>
               </div>
               {/* <div className="portfolio-tags">
                    
               </div> */}
               <div className="portfolio-piece-links">
                    { props.live ? <a href={props.website}>website →</a> : <small>[coming soon]</small> }
                    <a href={props.gitHub} >github →</a>
               </div>
          </div>
     </div>
)

export default ProjectCard;