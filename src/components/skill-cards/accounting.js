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
      <p>8 years experience in full cycle accounting and reporting in process improvement focused roles. Worked in fast paced, high pressure environments, managed multiple clients' accounts within the same role.</p>
    </div>
</div>
)

export default Accounting
