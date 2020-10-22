import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

class Navbar extends React.Component {
     render () {
     return (
          <div className="navbar">
               <div className="navbar-navigation">
                    <Link to="/#home">Home</Link>
                    <Link to="/#about">About</Link>
                    <Link to="/#skills">Skills</Link>
                    <Link to="/#projects">Projects</Link>
                    <a href="mailto:erika.sinkovics@outlook.com" className="button-mailto-plane">
                         <FontAwesomeIcon icon={faPaperPlane} />
                    </a>
                    <a href="mailto:erika.sinkovics@outlook.com" className="button-mailto">
                         Contact Me
                         <FontAwesomeIcon icon={faPaperPlane} />
                    </a>
               </div>
          </div>
     );
        }
}
     


if (typeof window !== "undefined") {
     // eslint-disable-next-line global-require
     require("smooth-scroll")('a[href*="#"]')
}
   
export default Navbar
