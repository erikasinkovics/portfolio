import UnpakkedImg from "../images/portfolio_unpakked.png"
// import PlantSitterImg from "../images/portfolio_plantsitter.png"
import MemoryGameImg from "../images/portfolio_memory.png"
import LegatoImg from "../images/portfolio_legato.png"
import Portfolio from "../images/screenshot_portfolio_desktop.png"
import ImageRepo from "../images/portfolio_imagerepo.png"

const projectData = [
     {
          id: 1,
          title: "🎻 Legato",
          description: "A web app connecting classical music enthusiasts with local musicians. Prototype built and deployed in 10 days during Le Wagon's Full-Stack Developer Bootcamp. I had the opportunity to work on the back-end of the application - including the search, booking, review features and the live chat built with Action Cable.",
          tags: ["Ruby", "Rails", "Action Cable", "Devise", "HTML", "JavaScript", "CSS"],
          website: "https://legatoconcerts.com/",
          gitHub: "https://github.com/boranzaza/legato/",
          thumbnail: LegatoImg,
          live: true
     },
     {
          id: 2,
          title: "🧩 MemoryGame",
          description: "Memory Game project written in React.js to put into practice the concept of props, constructors and states.",
          tags: ["ReactJS", "HTML", "CSS", "JavaScript", "Css animations", "react-state", "react-props" ],
          website: "https://erikasinkovics.github.io/memory/",
          gitHub: "https://github.com/erikasinkovics/memory",
          thumbnail: MemoryGameImg,
          live: true
     },
     {
          id: 3,
          title: "📍 This website",
          description: "My portfolio website was built with GatsbyJS, and customized with Scss, css keyframes animation and various React libraries.",
          tags: ["Gatsby", "ReactJS", "HTML", "SCSS", "JavaScript", "React-Slick", "Smoothscroll", "Keyframes"],
          website: "https://erikasinkovics.github.io/",
          gitHub: "https://github.com/erikasinkovics/portfolio",
          thumbnail: Portfolio,
          live: true
     },
     {
          id: 4,
          title: "🏞 Image Repository",
          description: "This a Rails CRUD app, inspired by flickr. Users can upload/delete their photos and browse other users' creations.",
          tags: ["Rails", "Ruby", "CRUD", "JavaScript", "HTML", "SCSS"],
          website: "http://my-image-repo.herokuapp.com/",
          gitHub: "https://github.com/erikasinkovics/image-repository",
          thumbnail: ImageRepo,
          live: false
     },
     {
          id: 5,
          title: "🌿 Unpakked",
          description: "Ever wanted to start shopping packaging free, but it felt like such an overwhelming venture? Fear no more. Unpakked will show you the nearest zero waste store in accordance with your weekly shopping list and also plan your itinerary.",
          tags: ["Ruby", "Rails", "Pundit", "Action Cable", "Mapbox", "JavaScript", "HTML", "SCSS"],
          website: "https://unpakked.app/",
          gitHub: "https://github.com/erikasinkovics/unpakked",
          thumbnail: UnpakkedImg,
          live: false
     },
     // {
     //      id: 6,
     //      title: "🌵 PlantSitter",
     //      description: "Rails marketplace application enabling users finding local plant experts to care for their 'urban jungle' while they are out of town.",
     //      tags: [],
     //      website: "",
     //      gitHub: "https://github.com/erikasinkovics/plantsitter-revamp",
     //      thumbnail: PlantSitterImg,
     //      live: false

     // },
]

export default projectData