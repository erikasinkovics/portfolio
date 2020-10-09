import React from "react"

//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

import Navbar from "../components/Navbar.js"
import Socials from "../components/Socials.js"
import Intro from "../components/Intro.js"
import Skills from "../components/Skills.js"
import MyWork from "../components/MyWork.js"
// import Timeline from "../components/Timeline.js"
import About from "../components/About"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Socials/>
    <Intro/>
    <About/>
    <Skills/>
    <MyWork/>
    {/* <Timeline/> */}
  </div>
)

export default IndexPage
