import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'

const Other = () => (
  <div className="skill-card">
    <div className="skill-icon">
      <FontAwesomeIcon icon={faCodeBranch} className="other"/>
    </div>
    <div className="skill-card-text">
      <h3>Technical Skills</h3>
      <p>Collaboration and version control using <span>Git/GitHub</span>. Deploying with <span>Heroku</span>. UI/UX design and prototyping with <span>Figma</span>. Relational databases: <span>ActiveRecord</span>, <span>Sqlite3</span>  and <span>PostgreSQL</span>.</p>
    </div>
  </div>
)

export default Other
