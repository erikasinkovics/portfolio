import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'


const Intro = () => (
  <div className="intro">
    <h1>Erika Sinkovics</h1>
    <p id="jobtitle">Full Stack Developer</p>
    <p>Metus massa tellus sed sed leo, turpis egestas. Mi commodo proin purus mi, sit ut sit at enim. Interdum elementum odio dolor varius dui quam at. Mi commodo proin purus mi, sit ut sit at enim. Interdum elementum odio dolor varius dui quam at.</p>
    <Link to="#">
      Download my CV<FontAwesomeIcon icon={faFileDownload} />
    </Link>
  </div>
)

export default Intro
