import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

const Languages = () => (
  <div className="skill-card">
    <div className="skill-icon">
      <FontAwesomeIcon icon={faLaptopCode} className="laptop" />
    </div>
    <div className="skill-card-text">
      <h3>Programming Languages</h3>
      <p>Solid foundations in <span>Ruby</span>, <span>JavaScript (ES2015)</span>, <span>HTML</span> and <span>CSS (Sass)</span>. <span>Object Oriented Programming</span> principles, <span>MVC</span> pattern.</p>
    </div>
  </div>
)

export default Languages
