import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

const Footer = () => (
  <div className="footer">
    <p>Made by <strong>Erika Sinkovics</strong> in 2020</p>
    <div className="socials-footer">
      <Link to="https://github.com/erikasinkovics" target="_blank"><FontAwesomeIcon icon={faGithub} /></Link>
      <Link to="https://www.linkedin.com/in/erikasinkovics/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></Link>
      <Link to="https://www.instagram.com/erika.sinkovics/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
      <Link to="https://twitter.com/erikasinkovics" target="_blank"><FontAwesomeIcon icon={faTwitter} /></Link>
    </div>
  </div>
)

export default Footer
