import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Frameworks = () => (
  <div className="skill-card">
    <div className="skill-icon">
      <FontAwesomeIcon icon={faReact} className="framework" />
    </div>
    <div className="skill-card-text">
      <h3>Frameworks</h3>
      <p>Built and shipped several projects using <span>Ruby and Rails</span>. Solid foundations in <span>ReactJS</span>. Currently working on the prototype of Rails app with its front-end done in ReactJS and <span>TypeScript</span>.</p>
    </div>
  </div>
)

export default Frameworks
