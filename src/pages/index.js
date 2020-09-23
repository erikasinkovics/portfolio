import React from "react"

//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

import Navbar from "../components/navbar.js"
import Socials from "../components/socials.js"
import Intro from "../components/intro.js"
import Skills from "../components/skills.js"
import MyWork from "../components/my-work.js"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Socials/>
    <Intro/>
    <Skills/>
    <MyWork/>
  </div>
)

export default IndexPage
