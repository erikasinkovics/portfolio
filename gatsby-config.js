module.exports = {
  siteMetadata: {
    title: `Erika Sinkovics - Full-Stack Developer`,
    description: `This is the portfolio website of full-stack developer, Erika Sinkovics.`,
    author: `Erika Sinkovics <erika.sinkovics@outlook.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
