import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

import PortfolioPiece from "./PortfolioPiece";

export default class PortfolioSlider extends Component {
  render() {
    const settings = {
     //  className: "center",
     //  centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 2,
      swipeToSlide: true,
      dots: true,
     //  afterChange: function(index) {
     //    console.log(
     //      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
     //    );
     //  },
    };
    return (
      <div>
        <Slider {...settings}>
          <PortfolioPiece projectName="" about="" projectUrl="" sourceUrl=""/>
          <PortfolioPiece/>
          <PortfolioPiece/>
          <PortfolioPiece/>
          <PortfolioPiece/>
          <PortfolioPiece/>
        </Slider>
      </div>
    );
  }
}