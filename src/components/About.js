import React from "react"
import ProfilePicture from "../components/profile-picture.js"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
// import resume from "../files/ErikaSinkovics_resume_4Oct2020.pdf" 

const About = () => (
     <div className="about-container" id="about">
          <ProfilePicture/>
          <div className="about-text">
               <h2><span>{"<"}</span>About<span>{"/>"}</span></h2>
               <p>I'm a <strong>junior full-stack developer</strong> based in Montréal, Québec 🇨🇦.</p>
               <p>I have changed careers after 8 working years in accounting specialising in process improvement. The search for doing something creative have led me to coding. It combines the fun <strong>problem-solving</strong> aspect of accounting and the joy of <strong>building a concept to reality</strong> that could be useful to others.</p>
               <p>I have recently completed <strong>Le Wagon's full-stack web development bootcamp</strong>. I'm currently learning ReactJS and working on a new Rails project to help my local zero waste community in planning their weekly shopping with the lowest possible carbon footprint.</p>
               <p>Outside of coding, I love hiking with my dog, learning French and exploring new places in Québec.
               </p>
               <Link to="#">
                    download my resumé
                    <FontAwesomeIcon icon={faFileDownload} />
               </Link>
          </div>
     </div>
)

export default About