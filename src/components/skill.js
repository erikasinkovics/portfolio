import React from "react"

import LanguagesImg from "../images/Languages.svg"

const Skill = (props) => (
  <div className="skill-card">
    <div className="skill-icon">
      <img src={props.icon} alt={props.icon_text} />
    </div>
    <div className="skill-card-text">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  </div>
)

export default Skill
