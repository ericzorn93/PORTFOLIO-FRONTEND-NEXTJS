module.exports = {
  siteMetadata: {
    title: `Eric Zorn Portfolio`,
    description: `Personalized portfolio with backend built in TypeScript and GraphQL.`,
    author: `@ericzorn93`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
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
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-typescript",
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "ZORNWEBDEV",
        // This is the field under which it's accessible
        fieldName: "zornwebdev",
        // URL to query from
        url: "https://ez-portfolio-backend-graphql.herokuapp.com/graphql"
      }
    }
  ]
};
