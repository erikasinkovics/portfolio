import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Socials = () => (
  <div className="socials">
    <Link to="#"><FontAwesomeIcon icon={faGithub} /></Link>
    <Link to="#"><FontAwesomeIcon icon={faLinkedin} /></Link>
    <Link to="#"><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link>
  </div>
)

export default Socials
