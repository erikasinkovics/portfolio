import React from "react"
import Languages from "../components/skill-cards/languages.js"
import Frameworks from "../components/skill-cards/frameworks.js"
import Other from "../components/skill-cards/other.js"
import Accounting from "../components/skill-cards/accounting.js"

const Skills = () => (
  <div className="skills">
    <div className="skills-container">
      <p className="subtitle">My Expertise</p>
      <h2>Skillset</h2>
      <div className="skill-list">
        <Languages/>
        <Frameworks/>
        <Other/>
        <Accounting/>
      </div>
    </div>
  </div>
)

export default Skills
