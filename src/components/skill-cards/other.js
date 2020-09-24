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
      <p>Cursus lorem est tellus nulla tellus volutpat pellentesque laoreet. Arcu magna purus libero neque eget enim etiam. Ut vestibulum tortor metus vitae, scelerisque amet.</p>
    </div>
  </div>
)

export default Other
