import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Socials = () => (
  <div className="socials">
    <Link to="#" id="github"><FontAwesomeIcon icon={faGithub} /></Link>
    <Link to="#" id="linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
    <Link to="#" id="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link to="#" id="twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
  </div>
)

export default Socials
