import React from "react"
import { Link } from "gatsby"

const Navbar = () => (
     <div className="navbar">
          <div id="navbar-home">
               <h2>erika</h2>
          </div>
          <div className="navbar-navigation">
               <Link to="#">About</Link>
               <Link to="#">Skills</Link>
               <Link to="#">Portfolio</Link>
               <Link to="#">Contact Me</Link>
          </div>
     </div>
)
   
export default Navbar
