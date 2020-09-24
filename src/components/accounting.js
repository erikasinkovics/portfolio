import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'

const Accounting = () => (
  <div className="skill-card">
    <div className="skill-icon">
      <FontAwesomeIcon icon={faCalculator} className="accounting" />
    </div>
    <div className="skill-card-text">
      <h3>Accounting</h3>
      <p>Cursus lorem est tellus nulla tellus volutpat pellentesque laoreet. Arcu magna purus libero neque eget enim etiam. Ut vestibulum tortor metus vitae, scelerisque amet.</p>
    </div>
</div>
)

export default Accounting
