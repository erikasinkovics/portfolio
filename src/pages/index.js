import React from "react"


//scss
import "../styles/styles.scss"
// Normalize is optional
import "normalize.css"

import Navbar from "../components/Navbar.js"
import Intro from "../components/Intro.js"
import Skills from "../components/Skills.js"
import Projects from "../components/Projects.js"
import About from "../components/About"
import Footer from "../components/Footer"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
  </div>
)

export default IndexPage
