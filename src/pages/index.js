import React from "react"
import { Link } from "gatsby"
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
    <Link to="/page-2">Go to page 2</Link>
    <p>This is a p tag to test font variables.</p>
  </div>
)

export default IndexPage
