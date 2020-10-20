import React from "react"
import { Link } from "gatsby"


const Intro = () => (
  <div className="intro container" id="home">
    <div className ="intro-content">
      <h4 style={{fontWeight: "400", marginBottom: "1.5rem"}}>hi! 👋 my name is</h4>
      <h1 style={{letterSpacing: 0.5}}>Erika Sinkovics</h1>
      <p style={{fontWeight: "300", marginTop: "1rem", fontSize: "1.1rem", letterSpacing: 0.1, lineHeight: "1.4"}}>
        I'm a full-stack web developer with a passion for back-end, who finds a lot of joy in solving problems and creating value for users.
      </p>
      <Link to="/#projects">
        look at my portfolio
      </Link>
    </div>
  </div>
)

export default Intro
