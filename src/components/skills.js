import React from "react"
import Languages from "../components/languages.js"
import Frameworks from "../components/frameworks.js"
import Other from "../components/other.js"

const Skills = () => (
  <div className="skills">
    <h2>Skillset</h2>
    <div className="skill-list">
      <Languages/>
      <Frameworks/>
      <Other/>
    </div>
  </div>
)

export default Skills
