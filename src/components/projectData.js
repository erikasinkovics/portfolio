import UnpakkedImg from "../images/portfolio_unpakked.png"
import PlantSitterImg from "../images/portfolio_plantsitter.png"
import MemoryGameImg from "../images/portfolio_memory.png"
import LegatoImg from "../images/portfolio_legato.png"

const projectData = [
     {
          id: 1,
          title: "🌿 Unpakked",
          description: "Ever wanted to start shopping packaging free, but it felt like such an overwhelming venture? Fear no more. Unpakked will show you the nearest zero waste store in accordance with your weekly shopping list and also plan your itinerary.",
          tags: ["Ruby", "Rails", "Pundit", "Action Cable"],
          website: "https://unpakked.app/",
          gitHub: "https://github.com/erikasinkovics/unpakked",
          thumbnail: "./images/portfolio_unpakked.png",
          live: false
     },
     {
          id: 2,
          title: "🎻 Legato",
          description: "A web app connecting classical music enthusiasts with local musicians. Prototype built and deployed in 10 days during Le Wagon's Full-Stack Developer Bootcamp. I had the opportunity to work on the back-end of the application - including the search, booking, review features and the live chat built with Action Cable.",
          tags: [],
          website: "https://legatoconcerts.com/",
          gitHub: "https://github.com/boranzaza/legato/",
          thumbnail: {LegatoImg},
          live: true
     },
     {
          id: 3,
          title: "🧩 MemoryGame",
          description: "Memory Game project written in React.js to put into practice the concept of props, constructors and states.",
          tags: [],
          website: "https://erikasinkovics.github.io/memory/",
          gitHub: "https://github.com/erikasinkovics/memory",
          thumbnail: {MemoryGameImg},
          live: true
     },
     {
          id: 4,
          title: "🏞 Image Repository",
          description: "Upload/delete your photos and browse other users' creations.",
          tags: ["Rails", "Ruby", "CRUD", "Pundit"],
          website: "http://my-image-repo.herokuapp.com/",
          gitHub: "https://github.com/erikasinkovics/image-repository",
          thumbnail: {},
          live: false
     },
     {
          id: 5,
          title: "📍 This website",
          description: "keyframes, smoothscroll, slick carousel",
          tags: ["Gatsby", "ReactJS", "HTML", "Sass", "JavaScript", "Heroku" ],
          website: "https://erikasinkovics.github.io/",
          gitHub: "https://github.com/erikasinkovics/portfolio",
          thumbnail: {},
          live: true
     },
     {
          id: 6,
          title: "🌵 PlantSitter",
          description: "Rails marketplace application enabling users finding local plant experts to care for their 'urban jungle' while they are out of town.",
          tags: [],
          website: "",
          gitHub: "https://github.com/erikasinkovics/plantsitter-revamp",
          thumbnail: {PlantSitterImg},
          live: false

     },
]

export default projectData