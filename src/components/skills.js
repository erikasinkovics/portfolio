import React from "react"
import SkillCard from "./SkillCard.js"

const Skills = () => (
  <div className="skills" id="skills">
    <div className="skills-container">
      {/* <p className="subtitle">My Expertise</p> */}
      <h2><span>{"<"}</span>Skillset<span>{"/>"}</span></h2>
      <div className="skill-list">
        <SkillCard
          title="Languages"
          description={
            <ul>
              <li>Ruby</li>
              <li>JavaScript ES6</li>
              <li>HTML</li>
              <li>CSS & Sass</li>
              <li>SQLite</li>
              <li>PostgreSQL</li>
            </ul>
          }/>
        <SkillCard
          title="Frameworks"
          description={
            <ul>
              <li>Ruby on Rails</li>
              <li>ReactJS</li>
              <li>GatsbyJS</li>
              <li>Bootstrap</li>
              <li>AJAX</li>
              {/* <li>JQuery</li> */}
            </ul>
          } />
        <SkillCard
          title="Tools"
          description={
            <ul>
              <li>git / GitHub</li>
              <li>command line</li>
              <li>npm</li>
              <li>yarn</li>
              <li>Regex</li>
            </ul>
          }/>
          <SkillCard
          title="Design"
          description={
            <ul>
              <li>Prototyping</li>
              <li>Wireframing</li>
              <li>Figma</li>
              {/* <li>Whimsical</li> */}
            </ul>
          }/>
      </div>
    </div>
  </div>
)

export default Skills
