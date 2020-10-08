import React from "react"
import SkillCard from "./SkillCard.js"

import LanguagesImg from "../images/languages.svg"
import FrontendImg from "../images/frontend.svg"
import BackendImg from "../images/backend.svg"

const Skills = () => (
  <div className="skills">
    <div className="skills-container">
      {/* <p className="subtitle">My Expertise</p> */}
      <h2><span>{"<"}</span>Skillset<span>{"/>"}</span></h2>
      <div className="skill-list">
        <SkillCard
          icon={LanguagesImg}
          icon_text="Frameworks & Languages"
          title="Frameworks & Languages" 
          description="Ruby・Rails・JavaScript ES6・ReactJS・AJAX・OOP・MVC pattern・Regex・git & GitHub・command line・npm・yarn"/>
        <SkillCard
          icon={FrontendImg}
          icon_text="Front-end Tools"
          title="Front-end Tools"
          description="HTML・CSS・SCSS / Sass・Bootsrap・Prototyping and wireframing・Figma"/>
        <SkillCard
          icon={BackendImg}
          icon_text="Back-end Tools"
          title="Back-end Tools"
          description="Relational databases・SQLite・PostgreSQL・Heroku・Cloudinary・APIs, JSON scraping"/>
      </div>
    </div>
  </div>
)

export default Skills
