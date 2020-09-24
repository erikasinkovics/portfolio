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
      <p>Cursus lorem est tellus nulla tellus volutpat pellentesque laoreet. Arcu magna purus libero neque eget enim etiam. Ut vestibulum tortor metus vitae, scelerisque amet.</p>
    </div>
  </div>
)

export default Frameworks
