import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Socials = () => (
  <div className="socials">
    <Link to="https://github.com/erikasinkovics" target="_blank" id="github"><FontAwesomeIcon icon={faGithub} /></Link>
    <Link to="https://www.linkedin.com/in/erikasinkovics/" target="_blank" id="linkedin"><FontAwesomeIcon icon={faLinkedin} /></Link>
    <Link to="https://www.instagram.com/erika.sinkovics/" target="_blank" id="instagram"><FontAwesomeIcon icon={faInstagram} /></Link>
    <Link to="https://twitter.com/erikasinkovics" target="_blank" id="twitter"><FontAwesomeIcon icon={faTwitter} /></Link>
  </div>
)

export default Socials
