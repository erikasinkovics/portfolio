import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.scss"; 
import "slick-carousel/slick/slick-theme.scss";

import PortfolioPiece from "./PortfolioPiece";

import UnpakkedImg from "../images/portfolio_unpakked.png"
import PlantSitterImg from "../images/portfolio_plantsitter.png"
import MemoryGameImg from "../images/portfolio_memory.png"
import LegatoImg from "../images/portfolio_legato.png"

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
          <PortfolioPiece
          background={{
            backgroundImage: "url(" + UnpakkedImg + ")",
            backgroundSize: "cover" }}
          projectTitle="🌿 Unpakked"
          about="Ever wanted to start shopping packaging free, but it felt like such an overwhelming venture? Fear no more. Unpakked will show you the nearest zero waste store in accordance with your weekly shopping list and also plan your itinerary."
          projectUrl="https://unpakked.app/"
          sourceUrl="#"/>
          <PortfolioPiece 
          background={{
            backgroundImage: "url(" + MemoryGameImg + ")",
            backgroundSize: "cover" }}
          projectTitle="🧩 Memory Game"
          about="Memory Game project written in React.js to put into practice the concept of props, constructors and states."
          projectUrl="https://erikasinkovics.github.io/memory/"
          sourceUrl="https://github.com/erikasinkovics/memory"/>
          <PortfolioPiece 
          background={{
            backgroundImage: "url(" + PlantSitterImg + ")",
            backgroundSize: "cover" }}
          projectTitle="🌵 PlantSitter"
          about="Rails marketplace application enabling users finding local plant experts to care for their 'urban jungle' while they are out of town."
          projectUrl="#"
          sourceUrl="https://github.com/erikasinkovics/plantsitter-revamp"/>
          <PortfolioPiece 
          background={{
            backgroundImage: "url(" + LegatoImg + ")",
            backgroundSize: "cover" }}
          projectTitle="🎻 Legato"
          about="A web app connecting classical music enthusiasts with local musicians. Prototype built and deployed in 10 days during Le Wagon's Full-Stack Developer Bootcamp.
          I had the chance to work on the back-end of the application - including the search, booking, review features and the live chat built with Action Cable."
          projectUrl="https://www.legatoconcert.com/"
          sourceUrl="https://github.com/boranzaza/legato"/>
          <PortfolioPiece 
          // imgUrl={UnpakkedImg}
          projectTitle="👩🏼‍💻 This website"
          about="I have designed and built my portfolio website using GatsbyJS."
          projectUrl="#"
          sourceUrl="https://github.com/erikasinkovics/portfolio"/>
        </Slider>
      </div>
    );
  }
}