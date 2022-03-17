module.exports = {
  siteMetadata: {
    title: "NBEST Bali Massage",
    description: `Layanan Jasa pijat spa massage panggilan ke rumah, kos, hotel, villa dan apartemen 24 jam.`,
    author: `@gatsbyjs`,
    // secret: {
    //   googleMapsKey: 'AIzaSyAwPcluBKt-t-ZaWdkZ0wxaKPBSDSDctFg'
    // }
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: "NBEST Bali Massage",
        short_name: "NBEST Bali Massage",
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
