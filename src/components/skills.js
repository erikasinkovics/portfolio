import React, { Component } from "react"
import SkillCard from "./SkillCard"
import skillData from "./skillData";

class Skills extends Component {
  render() { 
    
    const skillComponents = skillData.map(skillgroup => {
      const skillList = skillgroup.list.map(item => <li>{item}</li>)
      return (
        <SkillCard title= {skillgroup.group}
          list={skillList}
          key={skillgroup.id}
          />
        )}
    );

    return (
      <div className="skills" id="skills">
        <div className="container">
          <div className="skills-container">
            <h2><span>{"<"}</span>Skillset<span>{"/>"}</span></h2>
              <div className="skill-list">
                {skillComponents}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills