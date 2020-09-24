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
      <p>Cursus lorem est tellus nulla tellus volutpat pellentesque laoreet. Arcu magna purus libero neque eget enim etiam. Ut vestibulum tortor metus vitae, scelerisque amet.</p>
    </div>
  </div>
)

export default Languages
