import React from "react"

const Timeline = () => (
  <div class="page">
    <h2>Timeline</h2>
  <div class="timeline">
    <div class="timeline__group">
      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__month">Sep</span>
          <span class="timeline__day">2020</span>
        </div>
        <div class="timeline__post">
          <div class="timeline__content">
            <p>Graduated from Le Wagon Montréal's 9 week intensive Full Stack Web Developer Bootcamp.
            Learned HTML, CSS, Bootstrap, JavaScript ES2015 SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a marketplace app and a Rails prototype of Legato.
            </p>
          </div>
        </div>
      </div>
      
      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">2015</span>
          <span class="timeline__day">2019</span>
        </div>
        <div class="timeline__post">
          <div class="timeline__content">
            <p>Worked for the Budapest shared service center of Viacom CBS as a GL Accountant. Taken part in the migration and improvement of several European subsidiaries' accounting and reporting processes. Trained junior colleagues and interns.
            </p>
          </div>
        </div>
      </div>

      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">2011</span>
          <span class="timeline__day">2014</span>
        </div>
        <div class="timeline__post">
          <div class="timeline__content">
            <p>Worked as an Accountant for Process Solutions, a firm specializing in business process outsourcing. Performed full range of accounting and taxation related tasks for over 8 different clients over the course of 3 years.</p>
          </div>
        </div>
      </div>

      <div class="timeline__box">
        <div class="timeline__date">
          <span class="timeline__day">2007</span>
          <span class="timeline__day">2010</span>
        </div>
        <div class="timeline__post">
          <div class="timeline__content">
            <p>Attended the University of Szeged in Hungary and graduated with a Bachelors Degree majoring in Finance and Accounting. Successfully tutored fellow students with non-accounting related majors.</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

)

export default Timeline
