import React from "react"
import { Link } from "gatsby"


const Navbar = () => (
     <div className="navbar">
          <div id="navbar-home">
               {/* <h2>erika</h2> */}
          </div>
          <div className="navbar-navigation">
               <Link to="/#home">Home</Link>
               <Link to="/#about">About</Link>
               <Link to="/#skills">Skills</Link>
               <Link to="/#projects">Portfolio</Link>
               <Link to="#">Contact Me</Link>
          </div>
     </div>
)

if (typeof window !== "undefined") {
     // eslint-disable-next-line global-require
     require("smooth-scroll")('a[href*="#"]')
}
   
export default Navbar
