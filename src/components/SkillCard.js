import React from "react"

const SkillCard = (props) => (
  <div className="skill-card">
    {/* <div className="skill-icon">
      <img src={props.icon} alt={props.icon_text} />
    </div> */}
    <div className="skill-card-text">
      <h4>{props.title}</h4>
      {props.description}
    </div>
  </div>
)

export default SkillCard