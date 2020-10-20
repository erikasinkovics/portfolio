import React from "react"

//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

import Navbar from "../components/Navbar.js"
import Socials from "../components/Socials.js"
import Intro from "../components/Intro.js"
import Skills from "../components/Skills.js"
import Projects from "../components/Projects.js"
// import Timeline from "../components/Timeline.js"
import About from "../components/About"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Socials/>
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    {/* <Timeline/> */}
  </div>
)

export default IndexPage
