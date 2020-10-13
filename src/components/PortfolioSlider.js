import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

import Project from "./Project";

import projectData from "./projectData";

export default class PortfolioSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      centerPadding: "30px",
      slidesToShow: 2,
      swipeToSlide: true,
      dots: true,
    };

    const projectComponents = projectData.map(project => 
      <Project thumbnail={project.thumbnail}
        title= {project.title}
        description={project.description}
        website={project.website}
        gitHub={project.gitHub}
        tags={project.tags}
        live={project.live}
        />
    )
    return (
      <div>
        <Slider {...settings}>
          {projectComponents}
        </Slider>
      </div>
    );
  }
}