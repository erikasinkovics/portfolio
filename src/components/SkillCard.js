import React from "react"

const SkillCard = (props) => (
  <div className="skill-card">
    <div className="skill-card-text">
      <h4>{props.title}</h4>
      <ul>
        {props.list}
      </ul>
    </div>
  </div>
)

export default SkillCard