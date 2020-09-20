import React from "react"

//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

import Navbar from "../components/navbar.js"
import Intro from "../components/intro.js"

const IndexPage = () => (
  <div>
    <Navbar/>
    <Intro/>
  </div>
)

export default IndexPage
