import React from "react"
import { Link } from "gatsby"
//scss
import "../styles/styles.scss"
// Normalize is optional up to you
import "normalize.css"

const IndexPage = () => (
  <div>
    <h1>Hi from the home page</h1>
    <Link to="/page-2">Go to page 2</Link>
    <p>This is a p tag to test font variables.</p>
  </div>
)

export default IndexPage
