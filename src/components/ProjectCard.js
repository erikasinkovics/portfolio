import React from "react";

const ProjectCard = (props) => (
     <div className="portfolio-piece-card">
          <img 
               className="portfolio-image"
               src={props.thumbnail} />
          <div className="portfolio-piece-text">
               <div>
                    <h5>{props.title}</h5>
                    <small>{props.description}</small>
               </div>
               <div className="portfolio-piece-links">
                    <a href={props.website} >website →</a>
                    <a href={props.gitHub} >github →</a>
               </div>
          </div>
     </div>
)

export default ProjectCard;