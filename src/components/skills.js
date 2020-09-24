import React from "react"
import Languages from "../components/languages.js"
import Frameworks from "../components/frameworks.js"
import Other from "../components/other.js"
import Accounting from "../components/accounting.js"

const Skills = () => (
  <div className="skills">
    <div className="skills-container">
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
