import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

import ProjectCard from "./ProjectCard";
import projectData from "./projectData";

export default class ProjectSlider extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: true
          }
        },
        {
          breakpoint: 540,
          settings: {
            swipeToSlide: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4000,
          }
        }
      ]
    };

    const projectComponents = projectData.map(project => 
      <ProjectCard thumbnail={project.thumbnail}
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